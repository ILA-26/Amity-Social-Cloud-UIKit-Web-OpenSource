import React, { useEffect } from 'react';
import {
  MessageRepository,
  ChannelRepository,
  SubChannelRepository,
  CommunityRepository,
} from '@amityco/ts-sdk';

import MessageList from '~/ila26/chat/components/MessageList';
import MessageComposeBar from '~/ila26/chat/components/MessageComposeBar';

import ChatHeader from '~/ila26/chat/components/ChatHeader';

import { ChannelContainer } from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannel from '~/ila26/chat/hooks/useChannel';
import useChannelMembers from '~/ila26/chat/hooks/useChannelMembers';

export interface ChatProps {
  channelId: string;
  variant: 'regular' | 'popup';
  onChatActionClick: () => void;
}

const Chat = ({ channelId, variant = 'regular', onChatActionClick }: ChatProps) => {
  const channel = useChannel(channelId);
  useEffect(() => {
    async function run() {
      if (channel == null) return;

      if (channel.type !== 'conversation') {
        await ChannelRepository.joinChannel(channel?.channelId);
      }

      await SubChannelRepository.startReading(channel?.channelId);
    }
    run();
    return () => {
      if (channel == null) return;
      SubChannelRepository.stopReading(channel?.channelId);
    };
  }, [channel]);

  const sendMessage = async (text: string) => {
    return MessageRepository.createMessage({
      subChannelId: channelId,
      data: { text },
      dataType: 'text',
    });
  };

  return (
    <ChannelContainer>
      <ChatHeader channelId={channelId} onChatActionClick={onChatActionClick} variant={variant} />
      <MessageList channelId={channelId} />
      <MessageComposeBar onSubmit={sendMessage} />
    </ChannelContainer>
  );
};

export default (props: ChatProps) => {
  const CustomComponentFn = useCustomComponent<ChatProps>('Chat');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <Chat {...props} />;
};
