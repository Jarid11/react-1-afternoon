import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  checkPalindrome(str) {
    var reverseStr = str
      .split("")
      .reverse()
      .join("");
    this.setState({
      palindrome: reverseStr === str ? true : false
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.checkPalindrome(this.state.userInput)}
        >
          Check
        </button>
        <span className="resultsBox">
          Palindrome: {JSON.stringify(this.state.palindrome)}
        </span>
      </div>
    );
  }
}

export default Palindrome;
