import React, { createContext, useEffect } from 'react';
import { MessageRepository, SubChannelRepository, MessageContentType } from '@amityco/ts-sdk';

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

export const PropsContext = createContext<{
  variant: 'regular' | 'popup';
  auth_displayName?: string;
}>({
  variant: 'regular',
});

const Chat = (props: ChatProps) => {
  const channel = useChannel(props.channelId);
  useEffect(() => {
    async function run() {
      if (channel == null) return;

      await SubChannelRepository.startMessageReceiptSync(channel?.channelId);
      if (channel.subChannelsUnreadCount > 0) {
        channel.markAsRead();
      }
    }
    run();
    return () => {
      if (channel == null) return;
      SubChannelRepository.stopMessageReceiptSync(channel?.channelId);
    };
  }, [channel]);

  const sendMessage = async (
    type: MessageType,
    payload: string,
  ): Promise<Amity.Cached<Amity.Message> | undefined> => {
    if (type === MessageContentType.TEXT) {
      return MessageRepository.createMessage({
        subChannelId: props.channelId,
        data: { text: payload },
        dataType: type,
      });
    } else {
      return MessageRepository.createMessage({
        subChannelId: props.channelId,
        dataType: type,
        fileId: payload,
      });
    }
  };

  return (
    <PropsContext.Provider value={{ variant: props.ila26_variant || 'regular' }}>
      <ChannelContainer>
        <ChatHeader {...props} />
        <MessageList channelId={props.channelId} />
        <MessageComposeBar onSubmit={sendMessage} />
      </ChannelContainer>
    </PropsContext.Provider>
  );
};

export default (props: ChatProps) => {
  const CustomComponentFn = useCustomComponent<ChatProps>('Chat');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <Chat {...props} />;
};
