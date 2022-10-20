import "./App.css";
import Product from "./product";
import WelcomeMessage from "./components/messasge";
import React from "react";
import Student from "./components/student";
import Car from "./components/car";

function App() {
  return (
    <React.Fragment>
      {/* <Product />  */}
      {/* <WelcomeMessage /> */}
      {/* < Student /> */}
      <Car />
    </React.Fragment>
  );
}

export default App;
