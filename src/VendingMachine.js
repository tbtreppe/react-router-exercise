import React from "react";
import { NavLink } from "react-router-dom";

function VendingMachine() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/Chips">
        Chips
      </NavLink>
      <NavLink exact to="/Chocolate">
        Chocolate
      </NavLink>
      <NavLink exact to="/Gum">
        Gum
      </NavLink>
    </nav>
  );
}

export default VendingMachine;
