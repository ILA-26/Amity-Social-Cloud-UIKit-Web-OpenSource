import React, { useEffect } from 'react';
import { MessageRepository, ChannelRepository, SubChannelRepository } from '@amityco/ts-sdk';

import MessageList from '~/ila26/chat/components/MessageList';
import MessageComposeBar from '~/ila26/chat/components/MessageComposeBar';

import ChatHeader from '~/ila26/chat/components/ChatHeader';

import { ChannelContainer } from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannel from '~/ila26/chat/hooks/useChannel';

export interface ChatProps {
  channelId: string;
  ila26_displayName?: string;
  ila26_variant?: 'regular' | 'popup';
  onChatActionClick: () => void;
}

const Chat = (props: ChatProps) => {
  const channel = useChannel(props.channelId);
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
      subChannelId: props.channelId,
      data: { text },
      dataType: 'text',
    });
  };

  return (
    <ChannelContainer>
      <ChatHeader {...props} />
      <MessageList channelId={props.channelId} />
      <MessageComposeBar onSubmit={sendMessage} />
    </ChannelContainer>
  );
};

export default (props: ChatProps) => {
  const CustomComponentFn = useCustomComponent<ChatProps>('Chat');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <Chat {...props} />;
};
