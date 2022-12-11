import "./App.css";
import Product from "./product";
import WelcomeMessage from "./components/messasge";
import React from "react";
import Student from "./components/student";
import Car from "./components/car";
import Counter from "./components/counter";
import Garage from "./components/garage";
import Employee from "./components/employee";
import AutoMobile from "./components/automobile";
import LifeCycleMethods from "./components/lifecyclemethods";

function App() {
  return (
    <React.Fragment>
      ̥{/* <Product />  */}
      {/* <WelcomeMessage /> */}
      {/* < Student /> */}
      {/* <Car /> */}
      {/* <Counter /> */}
      {/* <Garage /> */}
      {/* <Employee name="Siman" propArray={[6, 7, 8, 9]} booleanVal={true} email="raghav@gmail.com"/> */}
      {/* <AutoMobile /> */}
      <LifeCycleMethods />
    </React.Fragment>
  );
}

export default App;
