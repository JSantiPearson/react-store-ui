import React, { Component } from "react";

class ShopList extends Component {
  state = {
    filtered: []
  };

  //   componentDidMount() {
  //     this.setState({
  //       filtered: this.props.items
  //     });
  //   }

  //   componentWillReceiveProps(nextProps) {
  //     this.setState({
  //       filtered: nextProps.items
  //     });
  //   }

  handleChange = e => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = [];
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  };

  render() {
    console.log(this.state.filtered);
    const divStyle = {
      fontSize: 20,
      position: "relative",
      top: 20,
      left: 800
    };
    return (
      <div style={divStyle}>
        <div className="panel panel-default p-2 m-2">
          <div className="panel-body">
            <div className="col-lg-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Search for..."
                />
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.filtered.map(item => (
              <div className="container">
                <div className="button btn btn-info" key={item.id}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ShopList;
