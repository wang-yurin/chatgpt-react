import React from 'react';
import styled from '@emotion/styled';
import { CommentOutlined } from '@ant-design/icons';
import theme from '../../styles/theme';

const ChatHistoryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.GREY200};
  }
`;

const Title = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatHistoryItem = ({ text }) => {
  return (
    <ChatHistoryItemWrapper>
      <CommentOutlined />
      <Title>{text}</Title>
    </ChatHistoryItemWrapper>
  );
};

export default ChatHistoryItem;
