import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-light-red: #f50000;
  --color-deep-red: #8F1919;
  --color-light-gray: #28292B;
  --color-deep-gray: #1D1E1F;
}


* {
  font-family: 'Noto Sans KR', sans-serif;
}


body {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline : none;
}
`;

export default GlobalStyle;
