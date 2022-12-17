import React, { useState } from 'react';

function MultipleFormFields() {

    const [inputs, setInputs] = useState({ country: "India" });

    const handleChange = (event) => {
        const nameAttribute = event.target.name; //Key
        const valueAttibute = event.target.value; //Value
        setInputs(values => ({ ...values, [nameAttribute]: valueAttibute }))
    }

    //Case 1:- {}
    //username : 'roger'; -> {} -> Result => {"username" : "roger"} 

    //Case 2:-  {"username" : "roger"} 
    //age : 26; -> {"username" : "roger"}  -> Result =>  {username : 'roger', age: 26} 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><label>Enter your Username :- </label></td>
                        <td>
                            <input type="text"
                                name="username"
                                value={inputs.username || ""}
                                onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Enter your Age :- </label></td>
                        <td>
                            <input type="number"
                                name="age"
                                value={inputs.age || ""}
                                onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Select your country :- </label></td>
                        <td>
                            <select name="country" value={inputs.country || ""} onChange={handleChange}>
                                <option value="India">India</option>
                                <option value="Australia">Australia</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Username Entered :- </label></td>
                        <td>
                            {inputs.username || ""}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Age Entered :- </label></td>
                        <td>
                            {inputs.age || ""}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Username Entered :- </label></td>
                        <td>
                            {inputs.hobbies || ""}
                        </td>
                    </tr>
                    <tr>
                        <td><input type="submit" /></td>
                    </tr>
                </tbody>

            </table>
        </form >
    );
}

export default MultipleFormFields;