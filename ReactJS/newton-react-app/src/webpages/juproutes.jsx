import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { JupiterContact } from './jupcontact';
import { JupiterHome } from './juphome';
import { JupNotFound } from './jupnotfound';


function JupiterRoutes() {
    return (
        <Routes>
            <Route path="/" element={<JupiterHome />}></Route>
            <Route path="/home" exact element={<JupiterHome />}></Route>
            <Route path="/contact" exact element={<JupiterContact />}></Route>
            <Route path="/*" element={<JupNotFound />}></Route>
        </Routes>
    );
}
export default JupiterRoutes;