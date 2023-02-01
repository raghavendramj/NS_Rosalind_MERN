import React, { useState } from 'react';

function UseStateHook() {
    //Step 1:- Reading the state, starting with initial value.

    // useState("Green") -> initial value for the state
    const [color, setColor] = useState("Green");

    return (

        <React.Fragment>
            <h1>My Favorite color is {color}</h1>
            {/* Step 2 :- Update the state! */}
            <button type='button' onClick={() => setColor("blue")}>Change Color to blue</button>
        </React.Fragment>
    );
}

export default UseStateHook;