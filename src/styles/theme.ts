import { css, Theme } from '@emotion/react';

const colors = {
  GREY50: '#f9fafb',
  GREY100: '#f2f4f6',
  GREY200: '#e5e8eb',
  GREY300: '#d1d6db',
  GREY400: '#b0b8c1',
  GREY500: '#8b95a1',
  GREY600: '#6b7684',
  GREY700: '#4e5968',
  GREY800: '#333d4b',
  GREY900: '#191f28',
};

const flex = {
  row: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  column: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
};

const mq = {
  laptop: `@media screen and (min-width: 1024px)`,
  tablet: `@media screen and (max-width: 1023px)`,
  mobile: `@media screen and (max-width: 767px)`,
};

const theme: Theme = {
  colors,
  flex,
  mq,
};

export default theme;
