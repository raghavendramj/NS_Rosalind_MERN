import React, { Component } from "react";

class Product extends Component {
    render() {
        var myStyle = {
            fontSize: 80,
            fontFamily: 'Courier',
            color: 'green'
        }
        return (
            <div>
                <h1 style={myStyle}>Newton School</h1>
                <h2>Edtech platform</h2>
                <p>Place to learn and make carrer out of it</p>
            </div>
        );
    }
}

export default Product;