import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: "Health Potion", value: 0 },
      { id: "Stamina Potion", value: 0 },
      { id: "Mana Potion", value: 0 },
      { id: "Poison Vial", value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected={true} />
        ))}
      </div>
    );
  }
}

export default Counters;
