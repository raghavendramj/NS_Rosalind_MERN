import React from 'react';
import { useOutletContext } from 'react-router-dom';

function NewBook() {
    const obj = useOutletContext();
    return (
        <React.Fragment>
            <h1>New Book Component!</h1>
            <p>Here we create a new book!</p>
            <p>Author :- {obj.author}</p>
        </React.Fragment>
    );
}

export default NewBook;