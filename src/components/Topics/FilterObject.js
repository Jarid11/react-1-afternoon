import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        { car: "Mazda", driver: "Jarid", age: 22 },
        { car: "Ford", tools: true },
        { car: "Chrysler", name: "Jodie" }
      ],
      userInput: "",
      filteredArray: []
    };

    this.filterObjects = this.filterObjects.bind(this);
  }

  updateArray(val) {
    this.setState({
      userInput: val
    });
  }

  filterObjects() {
    let filtered = this.state.unFilteredArray.filter(
      e => e[this.state.userInput]
    );

    this.setState({
      filteredArray: filtered
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.updateArray(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterObjects(this.state.unFilteredArray)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;

// for (var i = 0; i < arr.length; i++) {
//   if (this.state.userInput === arr[i]["car"]) {
//     console.log(arr[i]["car"]);
//   }
// }
