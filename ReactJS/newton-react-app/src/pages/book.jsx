import React, { Component } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';


function Book() {
    const { id } = useParams();
    const obj = useOutletContext();
    return (
        <React.Fragment>
            <h1>Book Component!</h1>
            <p>Book Functional Component!</p>
            <p>Id :- {id}</p>
            <p>Author :- {obj.author}</p>
        </React.Fragment>
    );
}

export default Book;