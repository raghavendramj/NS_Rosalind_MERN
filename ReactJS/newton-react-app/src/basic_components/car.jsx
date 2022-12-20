import React, { Component } from 'react';

class Car extends Component {
    state = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red',
        year: 2004
    }

    changeColor = () => {
        this.setState({ color: 'blue' });
    }
    render() {
        return (
            <div>
                <h1>My Car is of brand {this.state.brand} </h1>
                <p>It is of {this.state.color} color {this.state.model} and manufactured in the year {this.state.year} </p>
                <button onClick={this.changeColor}>Change Color</button>

            </div>
        );
    }
}

export default Car;