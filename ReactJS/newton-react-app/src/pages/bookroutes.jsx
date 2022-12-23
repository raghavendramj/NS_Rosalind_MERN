export function BookRoutes() {
    return (
        <Routes>
            <Route index element={<BookList />}></Route>
            <Route path=":id" element={<Book />}></Route>
            <Route path="new" element={<NewBook />}></Route>
        </Routes>
    );
}