import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
        html,
        body,
        div,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        a,
        address,
        img,
        strong,
        ol,
        ul,
        li,
        form,
        label,
        article,
        aside,
        footer,
        header,
        nav,
        section,
        input,
        textarea {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        html {
          font-size: 62.5%;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          body {
            font-size: 1.6rem;
          }
        }
        ol,
        ul {
          list-style: none;
        }
        a {
          background-color: transparent;
          text-decoration: none;
          outline: none;
          color: inherit;
          &:active,
          &:hover {
            text-decoration: none;
            color: inherit;
            outline: 0;
          }
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
          border: none;
          background: none;
          padding: 0;
          user-select: none;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: inherit;
          font: inherit;
          color: inherit;
        }
        input {
          outline: none;
        }
        img {
          vertical-align: top;
          max-width: 100%;
        }
      `}
    />
  );
};

export default GlobalStyle;
