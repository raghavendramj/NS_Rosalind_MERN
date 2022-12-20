import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  handleCounter = (increment) => {
    let { counter } = this.state; //Taking out a copy from the object -> Destructring

    //Update the value
    if (increment) {
      counter++;
    } else {
      counter--;
    }

    //Set state for the same property!
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleCounter(true)}>
          Increment Counter
        </button>
        <br />
        <br />
        <button onClick={() => this.handleCounter(false)}>
          Decrement Counter
        </button>
        <br />
        <br />
        <div> Counter Value is {this.state.counter} </div>
      </div>
    );
  }
}

export default Counter;
