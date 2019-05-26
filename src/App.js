import React from "react";
import "./App.css";
import QuoteCard from "./components/quote-card";
import Spinner from "./components/spinner";

class App extends React.Component {
  state = { quote: null, error: null };

  clickHandler = () => {
    this.getQuote();
  };

  getQuote = () => {
    this.setState({ loading: true });
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    )
      .then(response => {
        if (!response.ok) {
          return response
            .json()
            .then(error =>
              this.setState({ error, quote: null, loading: false })
            );
        }
        return response.json();
      })
      .then(quote => this.setState({ quote, error: null, loading: false }));
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    const { quoteText, quoteAuthor = "Anonymous" } = this.state.quote || {};
    return (
      <main className="App-main">
        <Spinner open={this.state.loading} />
        {this.state.quote && !this.state.loading && (
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
