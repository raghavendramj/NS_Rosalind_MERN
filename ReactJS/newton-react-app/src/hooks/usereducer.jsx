import { useReducer } from "react";


function UseReducerHook() {

    const initialState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count} 
            <br />
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    
            <br />
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </>

    );
}

export default UseReducerHook;