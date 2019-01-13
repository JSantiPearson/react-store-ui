import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";
import ShopList from "./components/shopList";
import "./App.css";

class App extends Component {
  state = {
    list: [
      "Health Potion",
      "Stamina Potion",
      "Mana Potion",
      "Speed Potion",
      "Poison Vial",
      "Luck Charm",
      "Phoenix Down",
      "Antidote",
      "Hero's Sword",
      "Wooden Shield",
      "Crossbow",
      "Werewolf Fang"
    ],
    counters: [
      { id: 1, name: "Health Potion", value: 0 },
      { id: 2, name: "Stamina Potion", value: 0 },
      { id: 3, name: "Mana Potion", value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    //don't decrement past zero
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleAdd = counter => {
    //create a new counter object
    const counters = this.state.counters;
    const newCounter = {
      id: counters.length + 1,
      name: counter,
      value: 0
    };
    //check if item is already in the list
    if (!counters.map(c => c.name).includes(counter)) {
      // if it isn't, add it
      counters.push(newCounter);
      this.setState({ counters: counters });
      {
        counters.map(counter => <Counter key={counter.id} />);
      }
    }
  };

  handleReset = () => {
    //change value of all counters to zero
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    const divStyle = {
      fontSize: 30
    };
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <ShopList
          items={this.state.list}
          onAdd={this.handleAdd}
          onSearch={this.handleSearch}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
