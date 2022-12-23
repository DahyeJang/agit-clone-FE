import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import HelmetComponent from "./shared/GlobalStyle";

function App() {
  return (
    <>
      <HelmetComponent />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
