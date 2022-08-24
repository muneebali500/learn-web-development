import "./App.css";
import { ChildA } from "./components/Context/ContextChildren";
import ContextParent from "./components/Context/ContextParent";
// import ParentFour from "./components/IncorrectOptimization/ParentFour";
// import ParentThree from "./components/IncorrectOptimization/ParentThree";
// import ChildOne from "./components/Optimization/ChildOne";
// import GrandParent from "./components/Optimization/GrandParent";
// import ParentTwo from "./components/Optimization/ParentTwo";
// import ParentOne from "./components/Optimization/ParentOne";
// import ObjectUseState from "./components/Immutable State/ObjectUseState";
// import ArrayUseState from "./components/Immutable State/ArrayUseState";
// import UseReducer from "./components/UseReducer/UseReducer";
// import UseState from "./components/UseState/UseState";
// import Parent from "../src/components/Parent Child/Parent";

function App() {
  // console.log(`App render`);

  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
