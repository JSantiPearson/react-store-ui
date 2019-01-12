import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  const divStyle = {
    fontSize: 20
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <a style={divStyle} className="navbar-brand text-left" href="#">
        Shopping Cart{" "}
        <span className="badge badge-secondary badge-pill">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
