import React from 'react';
import Chat, { ChatProps } from '../Chat';
import { Popup } from './styles';

const ChatPopup = (props: Omit<ChatProps, 'variant'>) => {
  return (
    <Popup>
      <Chat variant="popup" {...props} />
    </Popup>
  );
};

export default ChatPopup;
