import React, { Component } from 'react';
import Tool from './tool';

class Garage extends Component {
    render() {
        return (
            <div>
                <h1>Example of Props usage!</h1>
                <Tool name="Raghavendra" tool="Spanner" />
            </div>
        );
    }
}

export default Garage;