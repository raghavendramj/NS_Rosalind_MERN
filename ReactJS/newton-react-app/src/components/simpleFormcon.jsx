import React, { Component } from 'react';
import { useState } from 'react';

function SimpleFormControlled() {
    //React Hook -> new State for  firstName -> ""
    const [firstName, setFirstName] = useState("");
    const [hobbies, setHobbies] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The firstName you entered was :- ${firstName}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><label>Enter your Firstname :- </label></td>
                        <td>
                            <input type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Enter your Age :- </label></td>
                        <td>
                            <input type="text"
                                name="age"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Enter your Hobbies :- </label></td>
                        <td>
                            <textarea value={hobbies}
                                onChange={(e) => setHobbies(e.target.value)}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td><label>FirstName :- </label></td>
                        <td>
                            <div>{firstName}</div>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Hobbies :- </label></td>
                        <td>
                            <div>{hobbies}</div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="submit" /></td>
                    </tr>
                </tbody>

            </table>
        </form>
    )
}

export default SimpleFormControlled;