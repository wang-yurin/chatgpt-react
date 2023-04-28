import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';

const chatStyles = (message: any) => css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  background-color: ${message?.role === 'user' ? theme.colors.GREY200 : '#fff'};
`;

const ChatType = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ChatContent = styled.div`
  font-size: 1.5rem;
`;

export { chatStyles, ChatType, ChatContent };
