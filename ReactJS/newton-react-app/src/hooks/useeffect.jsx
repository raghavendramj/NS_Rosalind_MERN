import React, { useEffect, useState } from "react";


function UseEffectHook() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     setTimeout(() => setCount(count => count + 1), 1000);
    // })
    useEffect(() => {
        document.title = `You have clicked ${count} times`;
    })

    return (
        <React.Fragment>
            <h1>I've rendered {count} times </h1>
            <button onClick={() => setCount(count => count + 1)}>Click me to increment! - WAY-01</button>
            <br />
            <br />
            <button onClick={() => setCount(count + 1)}>Click me to increment! - WAY-02</button>
        </React.Fragment>
    );
}

export default UseEffectHook;