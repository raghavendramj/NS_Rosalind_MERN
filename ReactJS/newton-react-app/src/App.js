import React from "react";
import "./App.css"; 
import UseEffectHook from "./hooks/useeffect";
import UseStateHook from "./hooks/usestate";
 import UserComponent1 from "./hooks/usecontextsolution";
import UseRefHook from "./hooks/useref";

function App() {
  return <React.Fragment>
    <UseStateHook />
    <UseEffectHook /> 
    <UserComponent1 />
    <UseRefHook />
  </React.Fragment>;
}

export default App;
