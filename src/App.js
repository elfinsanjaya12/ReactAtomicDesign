import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Home from "./pages/Home";
import PostsIndex from "./pages/posts/Index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Navbar />
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts" exact component={PostsIndex} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
