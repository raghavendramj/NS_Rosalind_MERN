import React, { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.input = React.createRef();
    }
    updateSubmit(event) {
        console.log("You have successfully submitted the form!");
        console.log(this.input);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.updateSubmit}>
                <h1>Uncontrolled FOrm Example</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Name :- </td>
                            <td><input type="text" ref={this.input} /></td>
                        </tr>
                        <tr>
                            <td>Password :- </td>
                            <td><input type="password" ref={this.input} /></td>
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

export default Registration;