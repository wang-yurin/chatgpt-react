/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChatContent, chatStyles, ChatType } from './ChatItem.styles';
import CodeBlock from './CodeBlock';

interface ChatProps {
  message: {
    role: string;
    content: string;
  };
  index: number;
}

const Chat = ({ message, index }: ChatProps) => {
  return (
    <div css={chatStyles(message)} key={index}>
      <ChatType>{message?.role !== 'user' ? 'Bot' : 'You'}</ChatType>
      <ChatContent>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ code: CodeBlock as React.ElementType }}
        >
          {message?.content}
        </ReactMarkdown>
      </ChatContent>
    </div>
  );
};

export default Chat;
