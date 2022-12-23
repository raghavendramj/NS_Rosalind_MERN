import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Students from "./pages/students";
import Student from "./pages/student";
import NotFound from "./pages/notfound";
import Book from "./pages/book";
import NewBook from "./pages/newbook";
import BookList from "./pages/booklist";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/books" element={<h1>All about Books!</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<Student />} />

        {/* This way we can go books component */}
        {/* <Route path="/books"> */}
         {/* <Route index element={<BookList />}></Route> */}
        <Route path="/books" element={<BookList />}> 
          <Route path=":id" element={<Book />}></Route>
          <Route path="new" element={<NewBook />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
