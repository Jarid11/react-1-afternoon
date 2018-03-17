import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Jarid", "Tea", "Human Foo", "Rick", "Morty", "Joe", "Bob"],
      userInput: "",
      filteredNames: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.filteredArray = this.filterString.bind(this);
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  filterString(userInput) {
    var names = this.state.names;
    var filteredNames = [];

    for (var i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span>Names: {JSON.stringify(this.state.names)}</span>
        <input
          className="inputLine"
          onChange={ele => this.handleChange(ele.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterString(this.state.userInput)}
        >
          Filter Strings
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredNames)}
        </span>
      </div>
    );
  }
}

export default FilterString;

// this.state.userInput.charAt(0) === e.charAt(arr[index])
// ? arr[index]
// : null;
