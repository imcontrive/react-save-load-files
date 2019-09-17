import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActiveProject from "./components/ActiveProject";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    isActiveProject: ""
  };

  handleActiveProject = project => {
    this.setState({ isActiveProject: project });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path={`/activeProject/:id`} component={ActiveProject} />
          </Switch>
        </div>
        <Nav handleProject={this.handleActiveProject} />
      </Router>
    );
  }
}

export default connect()(App);
