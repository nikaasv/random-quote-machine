import React from "react";
import "./App.css";
import Button from "./components/button";
import { quotes } from "./constants";

class App extends React.Component {
  state = { quoteNumber: 0 };
  clickHandler = () => {
    this.setState({ quoteNumber: this.state.quoteNumber + 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Current quote: {quotes[this.state.quoteNumber % quotes.length].quote}
          <Button onClick={this.clickHandler}>Click me</Button>
        </header>
      </div>
    );
  }
}

export default App;
