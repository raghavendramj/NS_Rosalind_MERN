import { useState } from "react";

const funCount = new Set();

function UseCallBackWithoutHook() {


    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const incrementNumber = () => {
        setNumber(number + 1);
    }

    funCount.add(increment);
    funCount.add(decrement);
    funCount.add(incrementNumber);
    console.log("funCount.size :- " + funCount.size);

    return (
        <div>
            Count: {count}
            <br />
            <br />
            <button onClick={increment}> Increment Count</button>
            <br />
            <button onClick={decrement}> Decrement Count</button>
            <br />
            <button onClick={incrementNumber}> Increment Number</button>
        </div>

    );
}

export default UseCallBackWithoutHook;