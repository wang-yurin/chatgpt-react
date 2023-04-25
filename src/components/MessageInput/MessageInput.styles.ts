import { css } from '@emotion/react';
import theme from '../../styles/theme';

const messageInputStyles = css`
  padding: 5rem 3rem;
  border-top: 1px solid ${theme.colors.GREY300};
  background-color: ${theme.colors.GREY200};
  font-size: 1.6rem;

  & > button {
    margin-left: 1rem;
  }
`;

const textareaStyles = {
  'background-color': theme.colors.GREY100,
  border: 'none',
  padding: '1.5rem',
};

export { messageInputStyles, textareaStyles };
