import { MyComp } from "./MyComp";
import { CounterWithoutState } from "./Components/1_State/CounterWithoutState";
import { CounterWithState } from "./Components/1_State/CounterWithState";
import { NameForm } from "./Components/1_State/NameForm";
import { Example1 } from "./Components/2_Effect/Example1";
import {Example2} from "./Components/2_Effect/Example2";
import Example3 from "./Components/2_Effect/Example3";
import Example4 from "./Components/2_Effect/Example4";
import Button from "./Components/3_Props/Button";
import { createGlobalStyle } from "styled-components";
import Menu from "./Components/3_Props/Menu";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }
`;

function App() {
  return (
  <>
    <div>
      <Menu />
    </div>
  </>
  );
}

export default App;
