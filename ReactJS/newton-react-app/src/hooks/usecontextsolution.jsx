import { useContext } from "react";
import { createContext, useState } from "react";

const userContext = createContext();

function UserComponent1() {
    const [user, setUser] = useState("Andrew Flintoff");
    return (
        <>
            <userContext.Provider value={user}>
                <h1>{`Hello ${user}`}</h1>
                <UserComponent2 />
            </userContext.Provider>

        </>
    );
}
export default UserComponent1;

function UserComponent2() {
    return (
        <>
            <h1>UserComponent2</h1>
            <UserComponent3 />
        </>
    );
}

function UserComponent3() {
    return (
        <>
            <h1>UserComponent3 </h1>
            <UserComponent4 />
        </>
    );
}
function UserComponent4() {
    return (
        <>
            <h1>UserComponent4 </h1>
            <UserComponent5 />
        </>
    );
}
function UserComponent5() {
    const user = useContext(userContext);
    return (
        <>
            <h1>UserComponent5 :- {user}</h1>
            <h1>{`Hello ${user} again!`}</h1>
        </>
    );
}