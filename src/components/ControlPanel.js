import React, { Component } from "react";
import {connect} from 'react-redux';

class ControlPanel extends Component {


  undoHandler = () => {
    console.log("undo")
    this.props.dispatch({type:"UNDO"})
  }
  redoHandler = () => {
    console.log("redo")
    this.props.dispatch({type:"REDO"})
  }
  render() {
    const isShapesArray = [
      { name: "Circle", id: "01" },
      { name: "Square", id: "02" }
    ];
    return (
      <div className="isActiveContainer">
        <span className="custom-dropdown big gap">
          <select name="dropdownShape" onChange={this.props.control}>
            {isShapesArray
              ? isShapesArray.map((list, index) => {
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
          <span className="undo" onClick={this.undoHandler}>
            <i className="fas fa-undo" />
            <button >Undo</button>
          </span>
          <span className="redo" onClick={this.redoHandler}>
            <i className="fas fa-redo" />
            <button>Redo</button>
          </span>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allHistory: state.undoRedoHandler
  };
}
export default connect(mapStateToProps)(ControlPanel);
