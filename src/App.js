import { Counter } from "./Counter";
import { UseMemoExample } from "./UseMemoExample";
import { Greeting } from "./Greeting";
import { Home } from "./Home";
import { PrincipleInsterstCal } from "./principleInterestCal";
import { Reducer } from "./Reducer";
import { RefHook } from "./RefHook";
import { UseCallbackExample } from "./UseCallbackExample";
import { UseEffectCleanupDemo } from "./useEffectCleanupDemo";
import { UserDashboard } from "./user-dashboard/userDashboard";
import { Welcome } from "./welcome";

function App() {
  return (
    <div className="App">
      react course
      {/* <Welcome />;
      <Greeting name={"praveen"} />*/}
      {/*<Counter />*/}
      {/*<UseEffectCleanupDemo />*/}
      {/* <PrincipleInsterstCal /> */}
      {/*<UserDashboard />*/}
      {/*<Home />*/}
      {/*<Reducer />*/}
       {/*<RefHook />*/}
      {/*<UseMemoExample />*/}
      <UseCallbackExample />
    </div>
  );
}

export default App;
