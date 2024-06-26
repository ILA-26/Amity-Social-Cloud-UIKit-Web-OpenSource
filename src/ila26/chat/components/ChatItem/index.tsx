import React from 'react';

import { backgroundImage as userBackgroundImage } from '~/icons/User';
import { backgroundImage as communityBackgroundImage } from '~/icons/Community';
import useChatInfo from '~/ila26/chat/hooks/useChatInfo';

import { ChatItemLeft, Title, Avatar, ChatItemContainer, UnreadCount } from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannelSubscription from '~/social/hooks/useChannelSubscription';
import useChannel from '~/ila26/chat/hooks/useChannel';

function getNormalizedUnreadCount(channelUnreadCount: number) {
  // Within this range the unread counter will show an actuall number
  const ACTUAL_NUMBER_AS_COUNTER_EDGES = {
    BOTTOM: 1,
    TOP: 99,
  };

  if (!channelUnreadCount) return '';

  if (channelUnreadCount < ACTUAL_NUMBER_AS_COUNTER_EDGES.BOTTOM) return '';

  if (channelUnreadCount <= ACTUAL_NUMBER_AS_COUNTER_EDGES.TOP) return channelUnreadCount;

  return `${ACTUAL_NUMBER_AS_COUNTER_EDGES.TOP}+`;
}

interface ChatItemProps {
  channelId: string;
  isSelected: boolean;
  onSelect: ({ channelId, type }: { channelId: string; type: string }) => void;
  ila26_displayName?: string;
}

const ChatItem = ({ channelId, isSelected, onSelect, ila26_displayName }: ChatItemProps) => {
  const channel = useChannel(channelId);
  const { chatName, chatAvatar } = useChatInfo({ channel });

  const normalizedUnreadCount = getNormalizedUnreadCount(channel?.unreadCount || 0);

  useChannelSubscription({
    channelId: channel?.channelId,
    shouldSubscribe: () => !!channel?.channelId,
  });

  return (
    <ChatItemContainer
      data-qa-anchor="chat-item"
      active={isSelected}
      onClick={(e) => {
        e.stopPropagation();
        if (channel) onSelect({ channelId: channel.channelId, type: channel.type });
      }}
    >
      <ChatItemLeft>
        <Avatar
          avatarUrl={chatAvatar}
          defaultImage={
            (channel?.memberCount || 0) > 2 ? communityBackgroundImage : userBackgroundImage
          }
        />
        <Title>
          {ila26_displayName ? chatName?.replace(ila26_displayName, '').replace(',', '') : chatName}
        </Title>
      </ChatItemLeft>
      {normalizedUnreadCount && (
        <UnreadCount data-qa-anchor="chat-item-unread-count">{normalizedUnreadCount}</UnreadCount>
      )}
    </ChatItemContainer>
  );
};

export default (props: ChatItemProps) => {
  const CustomComponentFn = useCustomComponent<ChatItemProps>('ChatItem');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <ChatItem {...props} />;
};
