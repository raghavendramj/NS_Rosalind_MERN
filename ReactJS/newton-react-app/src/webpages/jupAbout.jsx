import React from "react";
import { useNavigate } from "react-router-dom";

export function JupiterAbout() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <h1>This is About page</h1>
            <nav>
                {/* Go back one page in history */}

                {/* navigate(-1) // Go back one page in history
                navigate(-3) // Go back three pages in history
                navigate(1) // Go forward one page in history */}
                <li><button onClick={() => navigate(-1)}>Go Back to Previous Page</button></li>
            </nav>
        </React.Fragment>
    );
}