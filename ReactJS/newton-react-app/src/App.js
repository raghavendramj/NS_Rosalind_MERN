import React from "react";
import "./App.css"; 
import UseEffectHook from "./hooks/useeffect";
import UseStateHook from "./hooks/usestate";
 import UserComponent1 from "./hooks/usecontextsolution";

function App() {
  return <React.Fragment>
    <UseStateHook />
    <UseEffectHook /> 
    <UserComponent1 />
  </React.Fragment>;
}

export default App;
