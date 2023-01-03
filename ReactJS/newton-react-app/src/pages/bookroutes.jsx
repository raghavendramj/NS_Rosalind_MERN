import { Route, Routes } from "react-router-dom";
import Book from "./book";
import BookList from "./booklist";
import NewBook from "./newbook";

export function BookRoutes() {
    return (
        <Routes>
            <Route index element={<BookList />}></Route>
            <Route path=":id" element={<Book />}></Route>
            <Route path="new" element={<NewBook />}></Route>
        </Routes>
    );
}