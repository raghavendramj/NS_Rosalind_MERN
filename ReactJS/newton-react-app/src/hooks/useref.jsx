import { useState, useEffect, useRef } from "react";
 
function UseRefHook() {
    const [inpValue, setInpValue] = useState("");
    const refCount = useRef(0); //const refCount = {current: 0} -> refCount.current.
    useEffect(() => {
        refCount.current = refCount.current + 1;
    });

    return (
        <>
            <h1>This is useRef Example!</h1>
            <input
                type="text"
                value={inpValue}
                onChange={(event) => setInpValue(event.target.value)}
            />

            <h1>Rendered Reference Count :- {refCount.current}</h1>
        </>

    );
}

export default UseRefHook;