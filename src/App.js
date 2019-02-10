import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Navbar />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
