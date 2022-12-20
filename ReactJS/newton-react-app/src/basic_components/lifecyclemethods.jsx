import React, { Component } from 'react';


class LifeCycleMethods extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'React Lifecycle' }
        this.changeState = this.changeState.bind(this);
    }
    render() {
        return (
            <div>
                <h1>React JS Lifecycle Components!</h1>
                <p>Heading :- {this.state.title}</p>
                <button onClick={this.changeState}> Change Content!</button>
            </div>

        );
    }

    componentWillMount() {
        console.log('Component Will MOUNT!')
    }
    componentDidMount() {
        console.log('Component Did MOUNT!')
    }

    changeState() {
        this.setState({ title: "Learning React Life Cycle!" }); 
    }

    componentWillReceiveProps(newProps) {
        console.log('Component Will Recieve Props!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component Will UNMOUNT!')
    }
}

export default LifeCycleMethods;