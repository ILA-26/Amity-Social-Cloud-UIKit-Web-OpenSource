import React, { useEffect, useMemo, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage, useIntl } from 'react-intl';
import { debounce, intersection } from 'lodash';

import ChatItem, { getNormalizedUnreadCount } from '~/ila26/chat/components/ChatItem';

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
  CountBadge,
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
import { ChannelRepository } from '@amityco/ts-sdk';
import { notification } from '~/core/components/Notification';

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { formatMessage } = useIntl();
  const { currentUserId } = useSDK();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChannelsType, setSelectedChannelsType] = useState<Amity.ChannelType>('conversation');

  const { followers } = useFollowersCollection({ userId: currentUserId, status: 'accepted' });
  const { followings } = useFollowingsCollection({ userId: currentUserId, status: 'accepted' });

  const { createChannel } = useCreateChannel();
  const { users: queriedUsers = [], isLoading: isLoadingUsers } = useUserQueryByDisplayName(
    selectedChannelsType === 'conversation' ? searchQuery : '',
  );

  const isCommunity = selectedChannelsType === 'community';
  const membership = searchQuery && isCommunity ? 'all' : membershipFilter;

  const {
    channels: conversationChannels,
    hasMore: hasMoreConversation,
    loadMore: loadMoreConversation,
    isLoading: isLoadingChannels,
  } = useChannelsCollection({
    membership,
    sortBy: 'lastActivity',
    types: ['conversation'],
    limit: 20,
  });

  const {
    channels: communityChannels,
    hasMore: hasMoreCommunity,
    loadMore: loadMoreCommunity,
  } = useChannelsCollection({
    membership,
    sortBy: 'lastActivity',
    types: ['community'],
    limit: 20,
  });

  const filteredChannels = useMemo(() => {
    if (selectedChannelsType === 'community') {
      if (!searchQuery) return communityChannels;
      const lowerCaseSearchQuery = searchQuery?.toLowerCase();

      return communityChannels.filter((channel) =>
        channel.displayName?.toLowerCase().includes(lowerCaseSearchQuery),
      );
    } else if (selectedChannelsType === 'conversation') {
      return conversationChannels.filter((channel) => channel.messageCount > 0);
    }

    return [];
  }, [
    communityChannels,
    conversationChannels,
    selectedChannelsType,
    ChannelRepository.onChannelLeft,
    ChannelRepository.onChannelJoined,
  ]);

  const communuityUnreadCount = useMemo(
    () =>
      getNormalizedUnreadCount(
        communityChannels.filter((channel) => channel.subChannelsUnreadCount > 0).length,
      ),
    [communityChannels],
  );

  const conversationUnreadCount = useMemo(
    () =>
      getNormalizedUnreadCount(
        conversationChannels.filter((channel) => channel.subChannelsUnreadCount > 0).length,
      ),
    [conversationChannels],
  );

  const debouncedSetSearchQuery = useMemo(() => debounce(setSearchQuery, 300), []);

  useEffect(() => {
    if (!selectedChannelId && filteredChannels.length > 0 && onChannelSelect) {
      onChannelSelect({ channelId: filteredChannels[0]._id, type: 'standard' });
    }
  }, [filteredChannels]);

  const connections = useMemo(
    () =>
      intersection(
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
          displayName?.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      setSearchQuery('');

      if (channel && channel._id) {
        onChannelSelect({ channelId: channel._id, type: channel.type });
      }
    }
  };

  const handleSelectChannelCategory = (newCategory: 'community' | 'conversation') => {
    if (newCategory !== selectedChannelsType) {
      setSelectedChannelsType(newCategory);
    }
  };

  const notifyUserMembership = (status: boolean) => {
    if (status) {
      notification.success({
        content: formatMessage({ id: 'chat.joinChat.success' }),
      });
    } else {
      notification.error({
        content: formatMessage({ id: 'chat.joinChat.error' }),
      });
    }
  };

  const renderContent = () => {
    if (searchQuery != '' && selectedChannelsType === 'conversation') {
      if (options.length === 0 && !isLoadingUsers && searchQuery.length > 2) {
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
    if (Array.isArray(filteredChannels)) {
      return filteredChannels.map((channel) => (
        <ChatItem
          key={channel.channelId}
          channelId={channel.channelId}
          isSelected={selectedChannelId === channel.channelId}
          onSelect={async (data) => {
            if (searchQuery && selectedChannelsType === 'community') {
              const status = await ChannelRepository.joinChannel(channel._id);
              notifyUserMembership(status);
            }
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
          onClick={() => handleSelectChannelCategory('conversation')}
          selected={selectedChannelsType === 'conversation'}
        >
          {conversationUnreadCount && <CountBadge>{conversationUnreadCount}</CountBadge>}
          <ChatIcon />
          <FormattedMessage id="chat.chat" tagName="span" />
        </CategoryItem>

        <CategoryItem
          onClick={() => handleSelectChannelCategory('community')}
          selected={selectedChannelsType === 'community'}
        >
          {communuityUnreadCount && <CountBadge>{communuityUnreadCount}</CountBadge>}
          <CommunityAlt />
          <FormattedMessage id="chat.community" tagName="span" />
        </CategoryItem>
      </div>
      <RecentContainer>
        <RecentHeader>
          <RecentHeaderLabel>
            <FormattedMessage
              id={selectedChannelsType === 'community' ? 'chat.communities' : 'chat.chats'}
            />
          </RecentHeaderLabel>
          {/* this component work only with Callback and User selector on Eko Side, during Personal Mode
        development selector was not add as there is not specific suitable design for UI Kit.
        Need to be done internaly by ASC when needed. */}

          {selectedChannelsType === 'community' && (
            <CreateNewChatIcon
              data-qa-anchor="chat-create-chat-button"
              onClick={onAddNewChannelClick}
            />
          )}
        </RecentHeader>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            ref={inputRef}
            type="text"
            placeholder={formatMessage({
              id:
                selectedChannelsType === 'conversation'
                  ? 'chat.searchUser'
                  : 'chat.searchCommunity',
            })}
            onChange={(e) => debouncedSetSearchQuery(e.target.value)}
          />
        </SearchContainer>

        <InfiniteScrollContainer ref={containerRef} data-qa-anchor="chat-list">
          {containerRef.current ? (
            <InfiniteScroll
              scrollableTarget={containerRef.current}
              scrollThreshold={0.7}
              hasMore={
                selectedChannelsType === 'community' ? hasMoreCommunity : hasMoreConversation
              }
              next={selectedChannelsType === 'community' ? loadMoreCommunity : loadMoreConversation}
              loader={
                (isLoadingChannels || isLoadingUsers) && (
                  <Center key={0}>
                    <FormattedMessage id="chat.loading" />
                    ...
                  </Center>
                )
              }
              dataLength={filteredChannels.length}
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
