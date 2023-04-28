import { css } from '@emotion/react';
import theme from '../../styles/theme';

const messageInputStyles = css`
  padding: 3rem;
  border-top: 1px solid ${theme.colors.GREY300};
  font-size: 1.6rem;

  & > button {
    margin-left: 1rem;
  }
`;

const textareaStyles = {
  backgroundColor: theme.colors.GREY200,
  border: 'none',
  padding: '1rem',
  boxShadow: '1px 1px 7px 0px rgba(0, 0, 0, 0.2)',
};

export { messageInputStyles, textareaStyles };
