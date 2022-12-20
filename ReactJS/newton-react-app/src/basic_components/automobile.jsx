import React, { Component } from 'react';

class AutoMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: 'Tesla',
            type: 'Automatic',
            variant: 'Battery Powered'
        }
        this.printDetails = this.printDetails.bind(this);
    }

    printDetails = () => {
        console.log(this);
    }

    modelChanges = (event) => {
        console.log("event.target.value :- ", event.target.value);
        const copiedState = { ...this.state };
        copiedState.model = event.target.value;
        this.setState(copiedState);
    }

    render() {
        return (
            <React.Fragment>

                <h1>Automobile Example</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Model Info :- {this.state.model} </td>
                        </tr>
                        <tr>
                            <td>Please enter model :- </td>
                            <td>
                                <input type="text" onChange={this.modelChanges} />
                            </td>
                        </tr>
                        {/* <tr>
                            <td>Please enter type :- </td>
                            <td>
                                <input type="text" value={this.state.type} />
                            </td>
                        </tr>
                        <tr>
                            <td>Please enter variant :- </td>
                            <td>
                                <input type="text" value={this.state.variant} />
                            </td>
                        </tr>
                        <tr> 
                            <td>
                               <button onClick={this.printDetails}>Check Details!</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>

            </React.Fragment>


        );
    }
}

export default AutoMobile;