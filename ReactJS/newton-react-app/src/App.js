import "./App.css";
import Product from "./product";
import WelcomeMessage from "./components/messasge";
import React from "react";
import Student from "./components/student";
import Car from "./components/car";
import Counter from "./components/counter";
import Garage from "./components/garage";
import Employee from "./components/employee";

function App() {
  return (
    <React.Fragment>
      {/* <Product />  */}
      {/* <WelcomeMessage /> */}
      {/* < Student /> */}
      {/* <Car /> */}
      {/* <Counter /> */}
      {/* <Garage /> */}
      <Employee name="Siman" />
    </React.Fragment>
  );
}

export default App;
