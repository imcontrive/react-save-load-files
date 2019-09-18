import React, { Component } from "react";
import { connect } from "react-redux";

class Diagram extends Component {
  styles = {
    height: "200px",
    width: "200px",
    border: "1px solid black",
    borderRadius: "",
    backgroundColor: ""
  };
  render() {
    const { history, activeProject } = this.props.allHistory;
    const currentProject = history[activeProject];
    const currentColor = currentProject.data[currentProject.currentIndex] || [];
    return (
      <div className="daigramWrapper">
        <div
          className="daigramShape"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: `${
              currentColor.shape === "Circle"
                ? "50%"
                : currentColor.shape === "Square"
                ? "0%"
                : ""
            }`,
            backgroundColor: `${currentColor.colorCode}`
          }}
        >
          <p className="colorCode">{currentColor.colorCode}</p>
        </div>

        <div className="isColorBoxes gap">
          <span className="lastUsedColor">
            {currentProject
              ? currentProject.data.map((item, i) => (
                  <span
                    className="box"
                    key={i}
                    style={{ backgroundColor: `${item.colorCode}` }}
                  ></span>
                ))
              : ""}
          </span>
          <p> LAST USED COLOURS</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allHistory: state.undoRedoHandler
  };
}
export default connect(mapStateToProps)(Diagram);
