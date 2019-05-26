import React from "react";
import "./App.css";
// import { quotes } from "./constants";
import QuoteCard from "./components/quote-card";

class App extends React.Component {
  state = { quote: null, error: null };

  clickHandler = () => {
    this.getQuote();
  };

  getQuote = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    )
      .then(response => {
        if (!response.ok) {
          return response
            .json()
            .then(json => this.setState({ error: json, quote: null }));
        }
        return response.json();
      })
      .then(quote => this.setState({ quote, error: null }));
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    const { quoteText, quoteAuthor } = this.state.quote || {};
    return (
      <main className="App-main">
        {this.state.quote && (
          <QuoteCard
            onClick={this.clickHandler}
            quoteText={quoteText}
            quoteAuthor={quoteAuthor}
          />
        )}
      </main>
    );
  }
}

export default App;
