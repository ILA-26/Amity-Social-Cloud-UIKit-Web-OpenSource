import React, { useMemo, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage, useIntl } from 'react-intl';
import { debounce } from 'lodash';

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
} from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannelsCollection from '~/ila26/chat/hooks/collections/useChannelsCollection';
import { useUserQueryByDisplayName } from '~/core/hooks/useUserQuery';
import useSDK from '~/core/hooks/useSDK';
import UserHeader from '~/social/components/UserHeader';
import useCreateChannel from '~/ila26/chat/hooks/useCreateChannel';

interface RecentChatProps {
  onChannelSelect?: (data: { channelId: string; type: string }) => void;
  onAddNewChannelClick: () => void;
  selectedChannelId?: string;
  membershipFilter?: 'all' | 'member' | 'notMember';
  ila26_displayName?: string;
}

const RecentChat = ({
  onChannelSelect,
  onAddNewChannelClick,
  selectedChannelId,
  membershipFilter,
  ila26_displayName,
}: RecentChatProps) => {
  const { channels, hasMore, loadMore } = useChannelsCollection({
    membership: membershipFilter,
    sortBy: 'lastActivity',
    limit: 20,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { formatMessage } = useIntl();
  const { currentUserId } = useSDK();

  const [searchUserQuery, setSearchUserQuery] = useState('');
  const { createChannel } = useCreateChannel();
  const { users: queriedUsers = [] } = useUserQueryByDisplayName(searchUserQuery);

  const debouncedSetSearchUserQuery = useMemo(() => debounce(setSearchUserQuery, 300), []);

  // Remove current user from list of optionss
  const options = useMemo(
    () =>
      queriedUsers.filter(
        ({ displayName, userId }) =>
          displayName?.toLowerCase().includes(searchUserQuery.toLowerCase()) &&
          userId !== currentUserId,
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

  return (
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
            loader={hasMore && <span key={0}>Loading...</span>}
            dataLength={channels.length}
            height={containerRef.current.clientHeight}
          >
            {options.length > 0 && searchUserQuery !== ''
              ? options.map((option) => (
                  <UserHeader userId={option.userId} onClick={() => handleSelectUser(option)} />
                ))
              : Array.isArray(channels) &&
                channels.map((channel) => (
                  <ChatItem
                    key={channel.channelId}
                    channelId={channel.channelId}
                    ila26_displayName={ila26_displayName}
                    isSelected={selectedChannelId === channel.channelId}
                    onSelect={(data) => {
                      onChannelSelect?.(data);
                    }}
                  />
                ))}
          </InfiniteScroll>
        ) : null}
      </InfiniteScrollContainer>
    </RecentContainer>
  );
};

export default (props: RecentChatProps) => {
  const CustomComponentFn = useCustomComponent('RecentChat');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <RecentChat {...props} />;
};
