import { useState } from "react";


function Component1() {
    const [user, setUser] = useState("Andrew Flintoff");
    return (
        <>
            <h1>{`Hello ${user}`}</h1>
            <Component2 user={user} />
        </>
    );
}
export default Component1;

function Component2({ user }) {
    return (
        <>
            <h1>Component2 :- {user}</h1>
            <Component3 user={user} />
        </>
    );
}

function Component3({ user }) {
    return (
        <>
            <h1>Component3 :- {user}</h1>
            <Component4 user={user} />
        </>
    );
}
function Component4({ user }) {
    return (
        <>
            <h1>Component4 :- {user}</h1>
            <Component5 user={user} />
        </>
    );
}
function Component5({ user }) {
    return (
        <>
            <h1>Component5 :- {user}</h1>
            <h1>{`Hello ${user} again!`}</h1>
        </>
    );
}