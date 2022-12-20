import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <h1>Welcome to React Application!</h1>
      <p>Lets explore more about React Routers and Links!</p>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
