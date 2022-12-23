import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-light-red: #f50000;
  --color-deep-red: #8F1919;
  --color-light-gray: #28292B;
  --color-deep-gray: #1D1E1F;
}
@font-face {
   font-family: 'bold';
   src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
}
@font-face {
  font-family: 'normal';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
}
@font-face {
    font-family: 'light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Th.woff2') format('woff2');
}

body {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline : none;
  font-family:'normal';
  background-color: var(--color-deep-gray);
  color: white;
}
`;

export default GlobalStyle;
