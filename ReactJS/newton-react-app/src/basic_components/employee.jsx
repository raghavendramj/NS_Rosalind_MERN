import React, { Component } from 'react';
import SoccerPlayer from './sockerplayer';
import PropTypes from 'prop-types';


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
            <React.Fragment>
                <div>
                    <p>Welcome {this.props.name} to Employees Home Page</p>
                    <p>Your designation is :-  {this.props.title}</p>
                    <SoccerPlayer playerName={this.state.name} playerProfession={this.state.profession} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Array :- </td>
                            <td>
                                {this.props.propArray}
                            </td>
                        </tr>
                        <tr>
                            <td>Boolean :- </td>
                            <td>
                                {this.props.booleanVal ? "Gotcha!, Its true" : "Hey Sorry, Its false!"}
                            </td>
                        </tr>
                        <tr>
                            <td>Number :- </td>
                            <td>
                                {this.props.id}
                            </td>
                        </tr>
                        <tr>
                            <td>String :- </td>
                            <td>
                                {this.props.testString}
                            </td>
                        </tr>
                        <tr>
                            <td>Function :- </td>
                            <td>
                                {this.props.custFunc(4)}
                            </td>
                        </tr>
                        <tr>
                            <td>Email :- </td>
                            <td>
                                {this.props.email}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>

        );
    }
}

Employee.propTypes = {
    propArray: PropTypes.array.isRequired,
    booleanVal: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    custFunc: PropTypes.func,
    testString: PropTypes.string,
    email: function (props, propName, componentName) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(props[propName])) {
            return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a valid email address.`);
        }
    }
}

Employee.defaultProps = {
    // email: 'glad@me.com',
    title: 'Software Engineer!',
    propArray: [1, 2, 3, 4, 5],
    booleanVal: false,
    id: 101,
    custFunc: function (number) { return number * number },
    testString: "Employee JSX",
}

export default Employee;