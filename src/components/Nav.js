import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  //Logic for handle Active Project Tab
  tabHandler = name => {
    this.props.dispatch({ type: "CHANGE_PROJECT_TAB", payload: name });
  };

  render() {
    const projects = [
      { name: `Project 1`, id: `project__1` },
      { name: `Project 2`, id: `project__2` },
      { name: `Project 3`, id: `project__3` },
      { name: `Project 4`, id: `project__4` }
    ];

    return (
      <div className="isWrapper">
        {projects.map((project, index) => (
          <Link
            key={index}
            className={
              project.id === this.props.allHistory.activeProject ? "active" : ""
            }
            to={`/activeProject/${project.id}`}
            onClick={() => this.tabHandler(project.id)}
          >
            <li>{project.name}</li>
          </Link>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    allHistory: state.undoRedoHandler
  };
}

export default connect(mapStateToProps)(Nav);
