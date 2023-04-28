import React from 'react';
import Chat from '../Chat/Chat';
import { getMessagesHistory } from '../../utils/storage';

const ChatHistory = () => {
  const messages = JSON.parse(getMessagesHistory());

  return (
    messages &&
    messages.map((message, index) => <Chat message={message} key={index} />)
  );
};

export default ChatHistory;
