import { css } from '@emotion/react';
import theme from '../../styles/theme';

const messageInputStyles = css`
  padding: 5rem 2rem;
  border-top: 1px solid ${theme.colors.GREY300};
  background-color: ${theme.colors.GREY200};

  & > button {
    margin-left: 1rem;
  }

  & textarea {
    display: block;
    height: 50px;
    max-height: 200px;
    overflow-y: scroll;
  }
`;

export default messageInputStyles;
