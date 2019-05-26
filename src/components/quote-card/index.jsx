import React from "react";
import "./quote-card.css";
import Button from "../button";

const QuoteCard = props => (
  <div className="quote-card">
    <p className="card-author">{props.quoteAuthor}</p>
    <hr />
    <p className="card-quote">{props.quoteText}</p>
    <Button onClick={props.onClick}>Click me</Button>
  </div>
);

export default QuoteCard;
