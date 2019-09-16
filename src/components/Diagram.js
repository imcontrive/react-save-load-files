import React from "react";
import { connect } from "react-redux";

function Diagram(props) {
  var value = props.shape === "Square" ? "0%" : "50%";
  var color = props.color;

  var styles = {
    height: "200px",
    width: "200px",
    border: "1px solid black",
    borderRadius: value,
    backgroundColor: color
  };
  return (
    <div className="daigramWrapper">
      <div style={styles} className={props.shape}></div>
      <div className="isColorBoxes gap">
        <span className="lastUsedColor">
          {props.dataHistory.slice(0, 3).map((color, i) => (
            <span
              className="box"
              key={i}
              style={{ backgroundColor: `${color}` }}
            ></span>
          ))}
        </span>
        LAST USED COLOURS
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state, "dffdfdffd");
  return {
    usedColoursInfo: state.colorsInfo
  };
}
export default connect(mapStateToProps)(Diagram);
