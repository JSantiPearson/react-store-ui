import React, { Component } from "react";

class ShopList extends Component {
  state = {
    input: ""
  };
  render() {
    const divStyle = {
      fontSize: 20,
      position: "relative",
      top: 20,
      left: 800
    };
    const { onSearch } = this.props;
    return (
      <div style={divStyle}>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-lg-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-btn">
                  <button
                    onClick={onSearch}
                    className="btn btn-default"
                    type="button"
                  >
                    Go!
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopList;
