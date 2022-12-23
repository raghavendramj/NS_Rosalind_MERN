import React, { Component } from 'react';
import { useParams } from 'react-router-dom';


function Book() {
    const { id } = useParams();
    return (
        <React.Fragment>
            <h1>Book Component!</h1>
            <p>Book Functional Component! and the id is :- {id}</p>
        </React.Fragment>
    );
}

export default Book;