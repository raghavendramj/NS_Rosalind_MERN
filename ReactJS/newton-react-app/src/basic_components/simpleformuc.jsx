import React, { Component } from 'react';


class SimpleFormUC extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "Testing" }
        this.changeFirstName = this.changeFirstName.bind(this);
    }

    changeFirstName(event) {
        console.log("Invoking change first name method :- ", event.target.value);
        let changedName = event.target.value;
        let copiedState = { ...this.state };
        copiedState.value = changedName;
        this.setState(copiedState); //Updated the state using a new copy of state.
    }

    render() {
        return (
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Enter your Firstname :- </label></td>
                            <td>
                                <input type="text" name="firstName"
                                    value={this.state.value}
                                    onChange={this.changeFirstName} />
                            </td>
                        </tr>
                        <tr>

                            <td><label>You have entered :- </label></td>
                            <td>
                                <div>{this.state.value}</div>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="submit" /></td>
                        </tr>
                    </tbody>

                </table>
            </form>
        );
    }
}

export default SimpleFormUC;