import React, { Component } from "react";

export default class ControlPanel extends Component {
  render() {
    const dropdownList = [
      { name: "Circle", id: "01", borderRadius: "50%" },
      { name: "Square", id: "02" }
    ];
    return (
      <div className="isActiveContainer">
        <span className="custom-dropdown big gap">
          <select name="dropdown" onChange={this.props.onClick}>
            {dropdownList
              ? dropdownList.map((list, index) => {
                  return (
                    <option key={index} value={list.name}>
                      {list.name}
                    </option>
                  );
                })
              : ""}
          </select>
        </span>
        <span className="isColorInput gap">
          <label htmlFor="ColorCode"></label>
          Color Code:
          <input
            type="text"
            value={this.props.colorCode}
            name="colorCode"
            onChange={this.props.control}
            placeholder="#"
            maxLength="7"
            required
          />
        </span>
        <span className="isUpdateBtn gap">
          <button
            className="updateBtn"
            onClick={() => this.props.updateColors(this.props.colorCode)}
          >
            Update Color
          </button>
        </span>
        <span className="undoredo gap">
          <span className="undo">
            <i className="fas fa-undo" />
            Undo
          </span>
          <span className="redo">
            <i className="fas fa-redo" />
            Redo
          </span>
        </span>
      </div>
    );
  }
}
