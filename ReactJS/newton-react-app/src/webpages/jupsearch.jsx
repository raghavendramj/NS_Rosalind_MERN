import React from "react";
import { useSearchParams } from "react-router-dom"

export function JupiterSearch() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
    const number = searchParams.get("n");
    return (
        <React.Fragment>
            <h1>{number}</h1>
            <input type="number" value={number}
                onChange={e => setSearchParams({ n: e.target.value })} />
        </React.Fragment>

    );
}