import "./App.css";
import Product from "./product";
import WelcomeMessage from "./components/messasge";
import React from "react";

function App() {
  return <React.Fragment>
    <Product /> 
    < WelcomeMessage />
  </React.Fragment>
}

export default App;
