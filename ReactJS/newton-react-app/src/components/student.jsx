
import React, { Component } from 'react';
class Student extends Component {
    constructor() {
        super();
        this.state = {
            showData: true,
            data: [
                { id: 1, name: 'Saiman' },
                { id: 2, name: 'Aparna' },
                { id: 3, name: 'Pavan' },
                { id: 4, name: 'Pandey' },
            ]
        }
    }

    toggleData = () => {
        const curState = { ...this.state }; //Duplicate the state content
        curState.showData = !curState.showData; // Do necessary modifications
        this.setState(curState); //finally update the state using setState() method.
    }
    render() {
        const data = this.state.showData ?
            (<div>
                <h1>Student Name Detail</h1>
                <ul>
                    {this.state.data.map((nameObj) => {
                        return <li key={nameObj.id}> {nameObj.name}</li>
                    })}

                </ul>
            </div>
            ) :
            (<div>
                <h1>No data to Show!</h1>
            </div>
            );

        return (
            <div>
                {data}
                <button onClick={this.toggleData}>Show Data</button>
            </div>
        )


    }
}

export default Student;