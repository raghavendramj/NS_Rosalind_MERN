import React from 'react';

function ReactLists() {

    let inputRef = React.createRef();

    const players = ["Messi", "Romero", "Acuna", "Nicolas", "Fernandez", "Gomez"];
    const playersList = players.map((eachPlayer) => <li key={eachPlayer}>{eachPlayer}</li>)

    function handleChange() {
        console.log("Favorite Player changed :- ", inputRef.current.value);
    } 

    return (
        <div>
            <h1>Argentina FIFA Worldcup Players 2022</h1>
            <ul>
                {playersList}
            </ul>
            <p>
                <label>Enter your favorite player :- </label>
                <input type="text" ref={inputRef}
                    onChange={handleChange} />
            </p>


        </div>
    )
}

export default ReactLists;