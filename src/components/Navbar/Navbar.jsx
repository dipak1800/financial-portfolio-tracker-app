import React from "react";
import "./Navbar.scss";

function navbar() {
  return (
    <nav id="navbar">
      <h2 className='heading'>
        Finance Portf
        <i id="icon" className="fas fa-search-dollar"></i>
        lio Tracker
      </h2>
    </nav>
  );
}

export default navbar;
