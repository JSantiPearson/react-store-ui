import React, { Component } from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Shopping Cart{" "}
        <span className="badge badge-secondary badge-pill">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
