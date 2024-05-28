import React from 'react';
import Chat, { ChatProps } from '../Chat';
import { Popup } from './styles';

const ChatPopup = (props: ChatPopupProps) => {
  return (
    <Popup>
      <Chat {...props} />
    </Popup>
  );
};

type ChatPopupProps = Required<ChatProps> & {
  open?: boolean;
};

export default ChatPopup;
