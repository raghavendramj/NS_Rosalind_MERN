import React, { Component } from 'react';
import Tool from './tool';

class Garage extends Component {
    state = {
        username: '',
        tool: ''
    }

    changeName = (event) => {
        let { username } = this.state;
        username = event.target.value;
        this.setState({ username });
    }
    changeTool = (event) => {
        let { tool } = this.state;
        tool = event.target.value;
        this.setState({ tool });
    }

    // submitForTool = () => {
    //     let { username, tool } = this.state;
    //     username = document.getElementById("name").value;
    //     tool = document.getElementById("tool").value;
    //     console.log("Tool:- ", tool);
    //     console.log("username:- ", username);
    //     this.setState({ username, tool });
    // }

    render() {
        let { username, tool } = this.state;
        return (
            <div>
                <h1>Example of Props usage!</h1>
                <p> React Props are read-only! You will get an error if you try to change their value.</p>

                <div>
                    <label htmlFor="name">Name:- </label>
                    <input type="text" id="name" onChange={this.changeName} />
                </div>
                <br />
                <div>
                    <label htmlFor="name">Tool:- </label>
                    <input type="text" id="tool" onChange={this.changeTool} />
                </div>
                <br />
                {/* <button onClick={this.submitForTool}>Submit Info</button> */}
                <Tool name={username} tool={tool} />
            </div>
        );
    }
}

export default Garage;