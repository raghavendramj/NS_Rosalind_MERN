import React from "react";
import "./App.css";
import UseEffectWithHook from "./hooks/UseCallBackWithHook";
import UseCallBackWithoutHook from "./hooks/usecallbackWithoutHook";

function App() {
  return (
    <React.Fragment>
      {/* <UseStateHook />
    <UseEffectHook /> 
    <UserComponent1 />
    <UseRefHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseCallBackWithoutHook /> */}
      <UseEffectWithHook />
    </React.Fragment>
  );
}

export default App;
