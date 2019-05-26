import React from "react";
import "./App.css";
import { quotes } from "./constants";
import QuoteCard from "./components/quote-card";

class App extends React.Component {
  state = { quoteNumber: 0 };
  clickHandler = () => {
    this.setState({ quoteNumber: this.state.quoteNumber + 1 });
  };

  render() {
    const { quoteText, quoteAuthor } = quotes[
      this.state.quoteNumber % quotes.length
    ];
    return (
      <main className="App-main">
        <QuoteCard
          onClick={this.clickHandler}
          quoteText={quoteText}
          quoteAuthor={quoteAuthor}
        />
      </main>
    );
  }
}

export default App;
