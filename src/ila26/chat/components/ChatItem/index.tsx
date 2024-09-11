import React, { useEffect, useState } from 'react';

import { backgroundImage as userBackgroundImage } from '~/icons/User';
import { backgroundImage as communityBackgroundImage } from '~/icons/Community';
import useChatInfo from '~/ila26/chat/hooks/useChatInfo';

import {
  ChatItemLeft,
  Title,
  Avatar,
  ChatItemContainer,
  UnreadCount,
  SubTitle,
  TitleContainer,
} from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannelSubscription from '~/social/hooks/useChannelSubscription';
import useChannel from '~/ila26/chat/hooks/useChannel';

export const getNormalizedUnreadCount = (channelUnreadCount: number) => {
  // Within this range the unread counter will show an actuall number
  const ACTUAL_NUMBER_AS_COUNTER_EDGES = {
    BOTTOM: 1,
    TOP: 99,
  };

  if (!channelUnreadCount) return '';

  if (channelUnreadCount < ACTUAL_NUMBER_AS_COUNTER_EDGES.BOTTOM) return '';

  if (channelUnreadCount <= ACTUAL_NUMBER_AS_COUNTER_EDGES.TOP) return channelUnreadCount;

  return `${ACTUAL_NUMBER_AS_COUNTER_EDGES.TOP}+`;
};

interface ChatItemProps {
  channelId: string;
  isSelected: boolean;
  onSelect: ({ channelId, type }: { channelId: string; type: string }) => void;
}

const ChatItem = ({ channelId, isSelected, onSelect }: ChatItemProps) => {
  const channel = useChannel(channelId);
  const [messagePreviewState, setMessagePreviewState] = useState<string>();
  const { chatName, chatAvatar, messagePreview } = useChatInfo({ channel });

  const normalizedUnreadCount = getNormalizedUnreadCount(channel?.subChannelsUnreadCount || 0);

  useChannelSubscription({
    channelId: channel?.channelId,
    shouldSubscribe: () => !!channel?.channelId,
  });

  useEffect(() => {
    if (messagePreview !== '') {
      setMessagePreviewState(messagePreview);
    }
  }, [messagePreview]);

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
        <TitleContainer>
          <Title>{chatName}</Title>
          <SubTitle>{messagePreviewState}</SubTitle>
        </TitleContainer>
        {normalizedUnreadCount && (
          <UnreadCount data-qa-anchor="chat-item-unread-count">{normalizedUnreadCount}</UnreadCount>
        )}
      </ChatItemLeft>
    </ChatItemContainer>
  );
};

export default (props: ChatItemProps) => {
  const CustomComponentFn = useCustomComponent<ChatItemProps>('ChatItem');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <ChatItem {...props} />;
};
