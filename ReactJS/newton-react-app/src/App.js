import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Students from "./pages/students";
import Student1 from "./pages/student1";
function App() {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/stundents">Students</Link></li>
          <li><Link to="/stundent/1">Raghava</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stundents" element={<Students />} />
        <Route path="/stundent/:id" element={<Student1 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
