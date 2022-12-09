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
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {this.props.propArray}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>

        );
    }
}

Employee.propTypes = {
    propArray: PropTypes.array.isRequired
}

Employee.defaultProps = {
    title: 'Software Engineer!',
    propArray: [1, 2, 3, 4, 5]
}

export default Employee;