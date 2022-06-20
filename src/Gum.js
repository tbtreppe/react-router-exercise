import React from "react";
import { Link } from "react-router-dom";
import "./Gum.css";

function Gum() {
  return (
    <div className="Gum">
      <h3>Gum</h3>
      <img src="https://previews.123rf.com/images/lineartestpilot/lineartestpilot1603/lineartestpilot160333199/53875077-freehand-textured-cartoon-chewing-gum.jpg" />
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}
export default Gum;
