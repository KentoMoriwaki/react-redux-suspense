import React, { Component, Timeout } from "react";
import logo from "./logo.svg";
import "./App.css";

let text = "";

const AsyncText = () => {
  if (text) {
    return <div>{text}</div>;
  }
  throw new Promise(resolve => {
    setTimeout(() => {
      text = "Hello, TimeOut";
      resolve();
    }, 3000);
  });
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Timeout ms={5000}>{this.renderTimeout}</Timeout>
      </div>
    );
  }

  renderTimeout = expired => {
    if (expired) {
      return <div>Timeout!</div>;
    }
    return <AsyncText />;
  };
}

export default App;
