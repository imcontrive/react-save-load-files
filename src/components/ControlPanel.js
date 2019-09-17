import React, { Component } from "react";
import { connect } from "react-redux";

class ControlPanel extends Component {
  state = {
    ActiveProject: "",
    colorCode: "",
    dropdownShape: "Circle",
    dataHistory: []
  };

  //Logic For handle inputs into  React State
  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  //Logic for  Update colors/Shape into Redux Store
  updateColors = color => {
    console.log(this.props.isActiveProject, "panel");
    this.props.dispatch({
      type: "ADD",
      payload: {
        colorCode: this.state.colorCode,
        shape: this.state.dropdownShape
      }
    });
    this.setState({
      dataHistory: [color, ...this.state.dataHistory]
    });
  };

  //Logic for Undo
  undoHandler = () => {
    this.props.dispatch({ type: "UNDO" });
  };

  //Logic for Redo
  redoHandler = () => {
    this.props.dispatch({ type: "REDO" });
  };

  render() {
    const isShapesArray = [
      { name: "Circle", id: "01" },
      { name: "Square", id: "02" }
    ];
    return (
      <div className="isActiveContainer">
        <span className="custom-dropdown big gap">
          <select name="dropdownShape" onChange={this.handleChange}>
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
            value={this.state.colorCode}
            name="colorCode"
            onChange={this.handleChange}
            placeholder="#"
            maxLength="7"
            required
          />
        </span>
        <span className="isUpdateBtn gap">
          <button
            className="updateBtn"
            onClick={() => this.updateColors(this.state.colorCode)}
          >
            Update Color
          </button>
        </span>
        <span className="undoredo gap">
          <span className="undo" onClick={this.undoHandler}>
            <i className="fas fa-undo" />
            <button>Undo</button>
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
