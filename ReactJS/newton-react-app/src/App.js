import "./App.css";
import React from "react";
import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Students from "./pages/students";
import Student from "./pages/student";
import NotFound from "./pages/notfound";
import Book from "./pages/book";
import NewBook from "./pages/newbook";
import BookList from "./pages/booklist";
function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "students",
      element: <Students />,
    },
    {
      path: "students/:id",
      element: <Student />,
    },
    {
      path: "books",
      element: <BookList />,
      children: [
        {
          path: ":id",
          element: <Book />,
        },
        {
          path: "new",
          element: <NewBook />,
        },
      ],
    },
    {
      path: "students",
      element: <Students />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            {/* replace is used to replace the earlier page! */}
            {/* <Link to="/" replace>Home</Link> */}
            {/* reloads the entire document! */}
            {/* <Link to="/" reloadDocument>Home</Link> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red", fontSize: "20px" } : {};
              }}
              to="/about"
            >
              {({ isActive }) => {
                return isActive ? "Active About" : "About";
              }}
            </NavLink>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
        </ul>
      </nav>
      {routes}
      {/* <Routes>
        <Route path="/books" element={<h1>All about Books!</h1>} />
      </Routes>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<Student />} /> 
        
        <Route path="/books" element={<BookList />}>
          <Route path=":id" element={<Book />}></Route>
          <Route path="new" element={<NewBook />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </React.Fragment>
  );
}

export default App;
