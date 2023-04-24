/** @jsxImportSource @emotion/react */
import React from 'react';
import styeld from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../styles/theme';

interface ChatProps {
  message: {
    role: string;
    content: string;
  };
  index: number;
}

const chatStyle = (message: any) => css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;

  background-color: ${message?.role !== 'user'
    ? theme.colors.GREY200
    : theme.colors.GREY300};
`;

const ChatType = styeld.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ChatContent = styeld.p`
  font-size: 1.5rem
`;

const Chat = ({ message, index }: ChatProps) => {
  return (
    <div css={chatStyle(message)} key={index}>
      <ChatType>{message?.role !== 'user' ? 'Bot' : 'You'}</ChatType>
      <ChatContent>{message?.content}</ChatContent>
    </div>
  );
};

export default Chat;
