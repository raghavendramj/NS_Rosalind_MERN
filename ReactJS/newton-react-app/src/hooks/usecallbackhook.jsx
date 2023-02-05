import { useCallback, useState } from "react";
import List from "./list";

function UseCallbackHook() {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    //Calls some API and returns some result!
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? "#333" : '#FFF',
        color: dark ? '#FFF' : "#333"
    }
    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={event => setNumber(parseInt(event.target.value))} />

            <button onClick={() => setDark(dark => !dark)}>
                Toggle Theme
            </button>
            <List items={getItems} />
        </div>
    );
}

export default UseCallbackHook;