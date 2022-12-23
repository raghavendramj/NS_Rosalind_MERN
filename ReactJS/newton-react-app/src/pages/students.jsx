import React, { Component } from 'react';

function Students() {
    return (
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
                    <td>Raghava</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Keshava</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Madhava</td>
                </tr>
            </tbody> 
        </table>
    );
}

export default Students;