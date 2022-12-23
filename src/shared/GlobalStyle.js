import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-point-blue: #497BD8;
  --color-light-gray: #F5F5F5;
  --color-deep-gray: #404040;
  --color-main-gray: #303030;
  --color-date-gray: #979797;
}


* {
  font-family: 'Noto Sans KR', sans-serif;
}


body {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 69px 0 0 0;
  margin: 0;
  text-decoration: none;
  outline : none;
  background-color: var(--color-light-gray);
}
`;

export default GlobalStyle;
