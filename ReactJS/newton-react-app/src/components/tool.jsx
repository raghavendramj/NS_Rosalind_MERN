import React from 'react';

//Functionl Component!
function Tool(props) { 
    const { name, tool } = props; //Destructruing.
    return(
        <div>
            <h1>My Name is {name}</h1>
            <p>My favorite design tool is {tool}</p>
        </div>
    ) 
}

export default Tool;