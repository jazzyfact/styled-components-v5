import { Button } from "./common";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body{
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
 }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button> Primary button</Button>
      <Button secondary>secondary button</Button>
    </>
  );
}

export default App;
