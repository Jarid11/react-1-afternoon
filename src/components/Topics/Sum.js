import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  handleChange1(val) {
    this.setState({
      number1: val
    });
  }

  handleChange2(val) {
    this.setState({
      number2: val
    });
  }

  addInputs(num1, num2) {
    this.setState({
      sum: +num1 + +num2
    });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={ele => this.handleChange1(ele.target.value)}
        />
        <input
          className="inputLine"
          onChange={ele => this.handleChange2(ele.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.addInputs(this.state.number1, this.state.number2)}
        >
          Add Numbers
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
