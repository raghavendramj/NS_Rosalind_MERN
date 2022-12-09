import React, { Component } from 'react';
import SoccerPlayer from './sockerplayer';

class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Chirstiano Rolando',
            profession: 'Soccer'
        }
    }
 
    render() {
        return (
            <div>
                <p>Welcome {this.props.name} to Employees Home Page</p>
                <p>Your designation is :-  {this.props.title}</p>

                <SoccerPlayer playerName={this.state.name} playerProfession = {this.state.profession} />
            </div>
        );
    }
}

Employee.defaultProps = {
    title: 'Software Engineer!'
}

export default Employee;