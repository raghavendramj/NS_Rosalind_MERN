import React, { Component } from 'react';

class ControlledComponentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const targetType = event.target.type;

        if (targetType === 'text') {
            this.setState({ value: event.target.value });
            console.log("Name's Value is :- ", this.state.value);
        } else {
            this.setState({ password: event.target.value });
            console.log("Password's Value is :- ", this.state.password);
        }
    }

    handleSubmit(event) {
        alert('You have submitted the input successfully: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Controlled Form Example</h1>

                <table>
                    <tbody>
                        <tr>
                            <td>Name:- </td>
                            <td> <input type="text" value={this.state.value} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Password:-</td>
                            <td> <input type="password" value={this.state.password} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Submit" /></td>
                        </tr>
                    </tbody>
                </table>

            </form>
        );
    }
}

export default ControlledComponentForm;