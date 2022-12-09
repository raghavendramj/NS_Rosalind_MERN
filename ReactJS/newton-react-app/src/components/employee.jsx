import React, { Component } from 'react';

class Employee extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>Welcome {this.props.name} to Employees Home Page</p>
                <p>Your designation is :-  {this.props.title}</p> 
            </div>
        );
    }
}

Employee.defaultProps = {
    title: 'Software Engineer!'
}

export default Employee;