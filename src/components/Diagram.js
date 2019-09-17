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
    const { history, currentIndex } = this.props.allHistory;
    const current = history[currentIndex] || {};
    // const lastThree = history.length > 3 ? history.sort((a, b) => a - b).slice(0, 3) : history;
    return (
      <div className="daigramWrapper">
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: `${
              current.shape === "Circle"
                ? "50%"
                : current.shape === "Square"
                ? "0%"
                : ""
            }`,
            backgroundColor: `${current.colorCode}`
          }}
        ></div>

        <div className="isColorBoxes gap">
          <span className="lastUsedColor">
            {history
              ? history
                  .sort((a, b) => b - a)
                  .slice(0, 3)
                  .map((item, i) => (
                    <>
                      <span
                        className="box"
                        key={i}
                        style={{ backgroundColor: `${item.colorCode}` }}
                      ></span>
                    </>
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
