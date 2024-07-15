import React from 'react';
import Chat, { ChatProps } from '../Chat';
import { Popup } from './styles';

const ChatPopup = (props: Omit<ChatProps, 'ila26_variant'>) => {
  return (
    <Popup>
      <Chat ila26_variant="popup" {...props} />
    </Popup>
  );
};

export default ChatPopup;
