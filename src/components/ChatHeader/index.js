import React from 'react';
import { ChannelRepository } from 'eko-sdk';

import { customizableComponent } from 'hocs/customization';
import useLiveObject from 'hooks/useLiveObject';

import {
  Avatar,
  ChatHeaderContainer,
  DetailsIcon,
  Channel,
  ChannelInfo,
  ChannelName,
  MemberCount,
} from './styles';

const channelRepo = new ChannelRepository();

const ChatHeader = ({ channelId, onChatDetailsClick }) => {
  const channel = useLiveObject(() => channelRepo.channelForId(channelId), {});

  return (
    <ChatHeaderContainer>
      <Channel>
        <Avatar />
        <ChannelInfo>
          <ChannelName>{channel.displayName || channel.channelId}</ChannelName>
          <MemberCount>{channel.memberCount} members</MemberCount>
        </ChannelInfo>
      </Channel>
      <DetailsIcon onClick={onChatDetailsClick} />
    </ChatHeaderContainer>
  );
};
export default customizableComponent('ChatHeader')(ChatHeader);