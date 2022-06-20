import React from "react";
import { Link } from "react-router-dom";
import "./Chocolate.css";

function Chocolate() {
  return (
    <div className="Chocolate">
      <h3>Chocolate</h3>
      <img src="https://charatoon.com/photo/2367.png" />
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}
export default Chocolate;
