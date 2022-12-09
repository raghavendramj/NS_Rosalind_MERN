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
    customProp : function(props, propName, componentName) {
        //Validation message
    }
}

Employee.defaultProps = {
    title: 'Software Engineer!',
    propArray: [1, 2, 3, 4, 5],
    booleanVal: false,
    id: 101,
    custFunc: function (number) { return number * number },
    testString: "Employee JSX",
}

export default Employee;