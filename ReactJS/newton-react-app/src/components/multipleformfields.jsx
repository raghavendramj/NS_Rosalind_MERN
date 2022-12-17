import React, { useState } from 'react';

function MultipleFormFields() {

    const [inputs, setInputs] = useState({});

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
        for (let eachKey of inputs) {
            console.log(`The ${eachKey} you have entered was :- ${inputs[eachKey]}`)
        }
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
                        <td><label>Enter your Hobbies :- </label></td>
                        <td>
                            <textarea
                                name="hobbies"
                                value={inputs.hobbies || ""}
                                onChange={handleChange}
                            ></textarea>
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