
import React, { Component } from 'react';
class Student extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { id: 1, name: 'Saiman' },
                { id: 2, name: 'Aparna' },
                { id: 3, name: 'Pavan' },
                { id: 4, name: 'Pandey' },
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Student Name Detail</h1>
                <ul>
                    {this.state.data.map((nameObj) => {
                        return <li key={nameObj.id}> {nameObj.name}</li>
                    })}

                </ul>
            </div>
        );
    }
}

export default Student;