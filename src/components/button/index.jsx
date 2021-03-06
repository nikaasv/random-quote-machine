import React from "react";
import "./button.css";

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

export default Button;
