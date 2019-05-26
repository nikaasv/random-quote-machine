import React from "react";
import "./spinner.css";

const Spinner = props => (
  <div className={`spinner-container${props.open ? " open" : ""}`}>
    <div class="loader">Loading...</div>
  </div>
);

export default Spinner;
