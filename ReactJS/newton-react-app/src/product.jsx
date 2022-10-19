import React, { Component } from "react";


// Component -> JSX
class Product extends Component {
    render() {
        var myStyle = {
            fontSize: 80,
            fontFamily: 'Courier',
            color: 'green'
        }
        let isContent = false;
        return (
            <div>
                <h1 style={myStyle}>Newton School</h1>
                <h2>Edtech platform</h2>
                <p id="test">Place to learn and make carrer out of it</p>
                <h3>{isContent ? 'Welcome to React' : 'Hey its JavaScript'}</h3>
            </div>
        );
    }
}

export default Product;