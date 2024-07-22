import React, { useEffect, useMemo, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage, useIntl } from 'react-intl';
import { debounce, union } from 'lodash';

import ChatItem from '~/ila26/chat/components/ChatItem';

import {
  CreateNewChatIcon,
  RecentContainer,
  RecentHeader,
  RecentHeaderLabel,
  InfiniteScrollContainer,
  SearchInput,
  SearchContainer,
  SearchIcon,
  Center,
  CategoryItem,
  CategoriesContainer,
} from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannelsCollection from '~/ila26/chat/hooks/collections/useChannelsCollection';
import { useUserQueryByDisplayName } from '~/core/hooks/useUserQuery';
import useSDK from '~/core/hooks/useSDK';
import UserHeader from '~/social/components/UserHeader';
import useCreateChannel from '~/ila26/chat/hooks/useCreateChannel';
import useFollowersCollection from '~/core/hooks/collections/useFollowersCollection';
import useFollowingsCollection from '~/core/hooks/collections/useFollowingsCollection';
import { CommunityAlt, ChatIcon } from '~/icons';

interface RecentChatProps {
  onChannelSelect?: (data: { channelId: string; type: string }) => void;
  onAddNewChannelClick: () => void;
  selectedChannelId?: string;
  membershipFilter?: 'all' | 'member' | 'notMember';
}

const RecentChat = ({
  onChannelSelect,
  onAddNewChannelClick,
  selectedChannelId,
  membershipFilter,
}: RecentChatProps) => {
  const [channelsCategory, setChannelsCategory] = useState<Amity.ChannelType>('community');
  const {
    channels,
    hasMore,
    loadMore,
    isLoading: isLoadingChannels,
  } = useChannelsCollection({
    membership: membershipFilter,
    sortBy: 'lastActivity',
    limit: 20,
    types: [channelsCategory],
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { formatMessage } = useIntl();
  const { currentUserId } = useSDK();
  const { followers } = useFollowersCollection({ userId: currentUserId, status: 'accepted' });
  const { followings } = useFollowingsCollection({ userId: currentUserId, status: 'accepted' });

  const [searchUserQuery, setSearchUserQuery] = useState('');
  const { createChannel } = useCreateChannel();
  const { users: queriedUsers = [], isLoading: isLoadingUsers } =
    useUserQueryByDisplayName(searchUserQuery);

  const debouncedSetSearchUserQuery = useMemo(() => debounce(setSearchUserQuery, 300), []);

  useEffect(() => {
    if (!selectedChannelId && channels.length > 0 && onChannelSelect) {
      onChannelSelect({ channelId: channels[0]._id, type: 'standard' });
    }
  }, [channels]);

  const connections = useMemo(
    () =>
      union(
        followers?.map((follower) => follower.from),
        followings?.map((following) => following.to),
      ),
    [followers, followings],
  );

  // Remove current user from list of optionss
  const options = useMemo(
    () =>
      queriedUsers.filter(
        ({ displayName, userId }) =>
          displayName?.toLowerCase().includes(searchUserQuery.toLowerCase()) &&
          userId !== currentUserId &&
          connections.includes(userId),
      ),
    [queriedUsers],
  );

  const handleSelectUser = async (option: Amity.User) => {
    if (option.displayName && onChannelSelect) {
      const channel = await createChannel([option.userId], option.displayName);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      setSearchUserQuery('');

      if (channel && channel._id) {
        onChannelSelect({ channelId: channel._id, type: channel.type });
      }
    }
  };

  const handleSelectChannelCategory = (newCategory: 'community' | 'conversation') => {
    if (newCategory !== channelsCategory) {
      setChannelsCategory(newCategory);
    }
  };

  const renderContent = () => {
    if (searchUserQuery != '') {
      if (options.length === 0 && !isLoadingUsers && searchUserQuery.length > 2) {
        return (
          <Center>
            <FormattedMessage id="chat.noResults" />
          </Center>
        );
      }
      return options.map((option) => (
        <UserHeader userId={option.userId} onClick={() => handleSelectUser(option)} />
      ));
    }
    if (Array.isArray(channels)) {
      return channels
        .filter((channel) => channel?.messageCount >= 1 || channel?.type !== 'conversation')
        .map((channel) => (
          <ChatItem
            key={channel.channelId}
            channelId={channel.channelId}
            isSelected={selectedChannelId === channel.channelId}
            onSelect={(data) => {
              onChannelSelect?.(data);
            }}
          />
        ));
    }
  };

  return (
    <CategoriesContainer>
      <div>
        <CategoryItem
          onClick={() => handleSelectChannelCategory('community')}
          selected={channelsCategory === 'community'}
        >
          <CommunityAlt />
          <span>Community</span>
        </CategoryItem>

        <CategoryItem
          onClick={() => handleSelectChannelCategory('conversation')}
          selected={channelsCategory === 'conversation'}
        >
          <ChatIcon />
          <span>Chat</span>
        </CategoryItem>
      </div>
      <RecentContainer>
        <RecentHeader>
          <RecentHeaderLabel>
            <FormattedMessage id="chat.chats" />
          </RecentHeaderLabel>
          {/* this component work only with Callback and User selector on Eko Side, during Personal Mode
        development selector was not add as there is not specific suitable design for UI Kit.
        Need to be done internaly by ASC when needed. */}
          <CreateNewChatIcon
            data-qa-anchor="chat-create-chat-button"
            onClick={onAddNewChannelClick}
          />
        </RecentHeader>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            ref={inputRef}
            type="text"
            placeholder={formatMessage({ id: 'chat.searchUser' })}
            onChange={(e) => debouncedSetSearchUserQuery(e.target.value)}
          />
        </SearchContainer>

        <InfiniteScrollContainer ref={containerRef} data-qa-anchor="chat-list">
          {containerRef.current ? (
            <InfiniteScroll
              scrollableTarget={containerRef.current}
              scrollThreshold={0.7}
              hasMore={hasMore}
              next={loadMore}
              loader={
                (isLoadingChannels || isLoadingUsers) && (
                  <Center key={0}>
                    <FormattedMessage id="chat.loading" />
                    ...
                  </Center>
                )
              }
              dataLength={channels.length}
            >
              {renderContent()}
            </InfiniteScroll>
          ) : null}
        </InfiniteScrollContainer>
      </RecentContainer>
    </CategoriesContainer>
  );
};

export default (props: RecentChatProps) => {
  const CustomComponentFn = useCustomComponent('RecentChat');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <RecentChat {...props} />;
};
