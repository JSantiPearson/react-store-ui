import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const divStyle = {
      fontSize: 20,
      position: "relative",
      top: -10,
      left: 5
    };
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <div class="container">
          <div class="row">
            <button
              style={divStyle}
              onClick={onReset}
              className="btn btn-primary btn-sm"
            >
              Reset
            </button>
          </div>
          {/* delete this div for rows instead of columns */}
          <div class="row">
            {counters.map(counter => (
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
