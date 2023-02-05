import { useState } from "react";
import { useMemo } from "react";


const cache = {};

function calcuSquare(number) {
    if (cache[number]) {
        console.log("Returning ",cache[number], " from cache!");
        return cache[number];
    }
    const result = number * number;
    cache[number] = result;
    console.log("Returning after storing it in cache!");
    return result;
}

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const newSquare = useMemo(() => calcuSquare(count), [count]);
    const increment = () => {
        setCount(count => count + 1);
    }
    const decrement = () => {
        setCount(count => count - 1);
    }

    return (
        <>
            <h1>UseMemo Square Example!</h1>
            <div>
                Count:- {count}
                <br />    <br />
                <button onClick={increment}> Increment </button>
                <br />    <br />
                <button onClick={decrement}> Decrement </button>
                <br />
                <h2>After Square calculation :- {newSquare}</h2>
            </div>
        </>

    );
}

export default UseMemoHook;




