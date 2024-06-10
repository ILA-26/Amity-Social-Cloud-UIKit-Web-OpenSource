import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ChannelRepository } from '@amityco/ts-sdk';

import UserAvatar from '~/ila26/chat/components/UserAvatar';
import { backgroundImage as userBackgroundImage } from '~/icons/User';
import { backgroundImage as communityBackgroundImage } from '~/icons/Community';
import useChatInfo from '~/ila26/chat/hooks/useChatInfo';

import {
  ChatHeaderContainer,
  DetailsIcon,
  Channel,
  ChannelInfo,
  ChannelName,
  MemberCount,
  HeaderCloseIcon,
} from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannel from '~/ila26/chat/hooks/useChannel';

type ChatHeaderProps = {
  channelId: string;
  onChatActionClick: () => void;
  ila26_variant?: 'regular' | 'popup';
};

const ChatHeader = ({ channelId, onChatActionClick, ila26_variant = 'regular' }: ChatHeaderProps) => {
  const channel = useChannel(channelId);
  const { chatName, chatAvatar } = useChatInfo({ channel });

  return (
    <ChatHeaderContainer $variant={ila26_variant} data-qa-anchor="chat-header">
      <Channel>
        <UserAvatar
          avatarUrl={chatAvatar || undefined}
          defaultImage={
            channel?.memberCount && channel.memberCount > 2
              ? communityBackgroundImage
              : userBackgroundImage
          }
        />
        <ChannelInfo data-qa-anchor="chat-header-channel-info">
          <ChannelName data-qa-anchor="chat-header-channel-info-channel-name">
            {chatName}
          </ChannelName>
          <MemberCount data-qa-anchor="chat-header-channel-info-member-count">
            <FormattedMessage id="chat.members.count" values={{ count: channel?.memberCount }} />
          </MemberCount>
        </ChannelInfo>
      </Channel>
      {ila26_variant === 'regular' ? (
        <DetailsIcon onClick={onChatActionClick} />
      ) : (
        <HeaderCloseIcon onClick={onChatActionClick} />
      )}
    </ChatHeaderContainer>
  );
};

export default (props: ChatHeaderProps) => {
  const CustomComponentFn = useCustomComponent<ChatHeaderProps>('ChatHeader');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <ChatHeader {...props} />;
};
