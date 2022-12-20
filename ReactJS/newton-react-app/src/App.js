import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  const myHomeStyle = {
    color: "red",
    backgroundColor: "lightyellow",
    padding: "8px",
    textDecoration: "none",
    border: "1px solid red",
    borderRadius: "10px",
    fontSize: "20px",
    fontFamily: "Arial",
  };
  return (
    <div>
      <h1>Welcome to React Application!</h1>
      <p>Lets explore more about React Routers and Links!</p>
      <ul>
        <li style={{ padding: "20px" }}>
          <Link style={myHomeStyle} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: "green" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
