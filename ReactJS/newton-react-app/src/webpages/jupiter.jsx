import React, { Component } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { JupiterAbout } from './jupAbout';
import { JupiterContact } from './jupcontact';
import { JupiterHome } from './juphome';
import { JupNotFound } from './jupnotfound';

function Jupiter() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <p>Welcome to the website!</p>
            <nav>
                 {/* <li><NavLink to="/home">Home</NavLink></li>
                <li>
                    <NavLink to="/contacts" style={({ isActive }) => {
                        return isActive ? { color: "red", fontSize: "30px" } : {}
                    }}>
                        Contacts
                    </NavLink>
                </li> */}
                <li><button onClick={() => navigate("/about")}>About</button></li>
            </nav>
            <Routes>
                <Route path="/" element={<JupiterHome />}></Route>
                <Route path="/home" exact element={<JupiterHome />}></Route>
                <Route path="/contacts" exact element={<JupiterContact />}></Route>
                <Route path="/about" exact element={<JupiterAbout />}></Route>
                <Route path="/*" element={<JupNotFound />}></Route>
            </Routes>
        </React.Fragment >
    );
}
export default Jupiter;