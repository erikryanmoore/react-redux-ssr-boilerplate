import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body, input, textarea {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  a, h1, h2, h3, h4, h5, h6, p, label {
    margin: 0;
  }
  input, textarea {
    box-sizing: border-box;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;
