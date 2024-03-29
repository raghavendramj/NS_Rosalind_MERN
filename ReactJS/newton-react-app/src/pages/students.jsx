import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

function Students() {
    return (
        <React.Fragment>
            <h1>Students Page!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><Link to="/students/1">Raghava</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><Link to="/students/2">Keshava</Link></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><Link to="/students/3">Madhava</Link></td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Students;