import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

function BookList() {
    return (
        <React.Fragment>
            <h1>Books List</h1>
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
                        <td><Link to="/books/1">Harry Potter</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><Link to="/books/2">Just like C</Link></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><Link to="/books/3">Learn JavaScript!</Link></td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default BookList;