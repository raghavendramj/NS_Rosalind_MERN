import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Contact Page</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Email:- </td>
                            <td>newtonschool.co@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Mobile:- </td>
                            <td>5623564586</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Contact;