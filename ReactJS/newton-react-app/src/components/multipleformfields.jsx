import React, { useState } from 'react';

function MultipleFormFields() {

    const [inputs, setInputs] = useState({ country: "India", gender: "Male", terms: false });

    const handleChange = (event) => {

        console.log("Event type :- ", event.target.type);
        console.log("Event type :- ", event.target.checked);
        // const targetType = event.target.type;
        // const value = null;
        // if (targetType === "checkbox") {
        //     value = target.checked;
        // } else { 
        //     value = target.value;
        // }   
        const nameAttribute = event.target.name; //Key
        // const valueAttibute = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const valueAttibute = event.target.value;
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
                        <td><label>Gender :- </label></td>
                        <td>
                            <input type="radio"
                                name="gender"
                                value="Male"
                                onChange={handleChange} /> Male
                        </td>
                        <td>
                            <input type="radio"
                                name="gender"
                                value="Female"
                                onChange={handleChange} /> Female
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" 
                        value={inputs.terms || false}
                        onChange={handleChange} 
                        /> I accept all terms and conditions!</td>
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
                        <td><label>Country Selected :- </label></td>
                        <td>
                            {inputs.country || ""}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Gender Selected :- </label></td>
                        <td>
                            {inputs.gender || ""}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Terms Checked :- </label></td>
                        <td>
                            {inputs.terms || ""}
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