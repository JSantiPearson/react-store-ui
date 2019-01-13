import React, { Component } from "react";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

class Counter extends Component {
  render() {
    const badgeStyle = {
      width: 50
    };
    const divStyle = {
      fontSize: 30
    };
    return (
      <div style={divStyle}>
        <span className="badge badge-info m-2">
          <div>
            <span className="badge badge-info">{this.props.counter.name}</span>
            <div>
              <span style={badgeStyle} className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
              <div className="btn-group" role="group" aria-label="...">
                <button
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-dark btn-sm"
                >
                  <span>
                    <Glyphicon glyph="chevron-up" />
                  </span>
                </button>
                <button
                  onClick={() => this.props.onDecrement(this.props.counter)}
                  className="btn btn-dark btn-sm"
                >
                  <span>
                    <Glyphicon glyph="chevron-down" />
                  </span>
                </button>
              </div>
              <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2"
              >
                <span>
                  <Glyphicon glyph="trash" />
                </span>
              </button>
            </div>
          </div>
        </span>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge col-md-5 m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
