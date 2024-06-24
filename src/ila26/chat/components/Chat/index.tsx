import React, { useEffect } from 'react';
import {
  MessageRepository,
  ChannelRepository,
  SubChannelRepository,
  MessageContentType,
} from '@amityco/ts-sdk';

import MessageList from '~/ila26/chat/components/MessageList';
import MessageComposeBar from '~/ila26/chat/components/MessageComposeBar';

import ChatHeader from '~/ila26/chat/components/ChatHeader';

import { ChannelContainer } from './styles';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import useChannel from '~/ila26/chat/hooks/useChannel';
import { ILA26_Values } from '~/ila26/utils';

export interface ChatProps {
  channelId: string;
  ila26_displayName?: string;
  ila26_variant?: 'regular' | 'popup';
  onChatActionClick: () => void;
}

export type MessageType = ILA26_Values<typeof MessageContentType>;

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

  const sendMessage = async (
    type: MessageType,
    text?: string,
    fileId?: string,
  ): Promise<Amity.Cached<Amity.Message>> => {
    if (type === MessageContentType.IMAGE) {
      return MessageRepository.createMessage({
        subChannelId: props.channelId,
        dataType: type,
        fileId,
      });
    } else {
      return MessageRepository.createMessage({
        subChannelId: props.channelId,
        data: { text },
        dataType: type,
      });
    }
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
