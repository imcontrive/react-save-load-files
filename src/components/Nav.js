import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const projects = [
      { name: `Project 1`, id: `7f26d4ed-4db8-4097-b061-ce2483f332a1` },
      { name: `Project 2`, id: `7cf56b57-d68e-4090-9bd6-bd7ddc6b7203` },
      { name: `Project 3`, id: `3664c32f-9a3c-47eb-8c0d-3e49f189609a` },
      { name: `Project 4`, id: `2e4ec86f-7af9-481a-93af-19cd8b69ac4d` }
    ];
    return (
      <div className="isWrapper">
        {projects.map((project, index) => (
          <NavLink
            key={index}
            exact
            activeClassName="active"
            to={`/activeProject/${project.id}`}
          >
            <li>{project.name}</li>
          </NavLink>
        ))}
      </div>
    );
  }
}
