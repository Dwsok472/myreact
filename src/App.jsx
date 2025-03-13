import { MyComp } from "./MyComp";
import { CounterWithoutState } from "./Components/1_State/CounterWithoutState";
import { CounterWithState } from "./Components/1_State/CounterWithState";
import { NameForm } from "./Components/1_State/NameForm";
import { Example1 } from "./Components/2_Effect/Example1";
import {Example2} from "./Components/2_Effect/Example2";
import {Example3} from "./Components/2_Effect/Example3";

function App() {
  return (
  <>
    <div>
      <Example3 />
    </div>
  </>
  );
}

export default App;
