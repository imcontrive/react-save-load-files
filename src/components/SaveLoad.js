import React from "react";

// var saveProjects=[];

export default function SaveLoad(props) {
 
  return (
    <div>
      <span className="upDown">
        <span className="project">
          <i className="fas fa-caret-square-up icon" />
          Load Project
        </span>
        <span className="project">
          <i className="fas fa-caret-square-down icon" onClick={props.save} />
          Save Project
        </span>
      </span>
    </div>
  );
}
