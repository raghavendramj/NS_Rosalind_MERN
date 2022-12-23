import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

function Student() {
    //This is the way we receive the parameters!
    const { id } = useParams();
    return (
        <h1>Student {id}</h1>
    );
}

export default Student;