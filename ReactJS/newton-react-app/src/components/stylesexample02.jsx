import React, { Component } from 'react';

function StylesExample2() {

    const divStyles = {
        color: 'red',
        backgroundColor: "black",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "1px",
        margin: "10px",
    },

        paraStyles = {
            color: "Black",
            backgroundColor: "white",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px",
            margin: "10px",
        }

    return (

        <div style={divStyles}>
            <p style={paraStyles}>React is mosy loved javascript library, according to stackoverflow survey 2022</p>
            <p style={paraStyles}>React is the most starred front-end library in github</p>
        </div>
    );
}

export default StylesExample2;