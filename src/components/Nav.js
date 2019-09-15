import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const projects = [
      { name: `Project 1`, id: `01` },
      { name: `Project 2`, id: `02` },
      { name: `Project 1`, id: `03` },
      { name: `Project 4`, id: `04` }
    ];
    return (
      <div className="isWrapper">
        {projects.map((project, index) => (
          <NavLink
            key={index}
            exact
            activeClassName="active"
            to={`/activeProject/${"project" + project.id}`}
          >
            <li>{project.name}</li>
          </NavLink>
        ))}
      </div>
    );
  }
}
