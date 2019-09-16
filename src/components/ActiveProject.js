import React, { Component } from "react";
import Diagram from "./Diagram";
import ControlPanel from "./ControlPanel";
import SaveLoad from "./SaveLoad";
import { connect } from "react-redux";

class ActiveProject extends Component {
  constructor(props) {
    super(props);
    console.log(props,"super")
    this.state = {
      isActiveProject: "",
      dropdownShape: "Circle",
      colorCode: "",
      dataHistory: [],
      // ====
      color: "",
      shape: ""
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  // saveProject = () => {
  //   localStorage.setItem("project", JSON.stringify(this.state));
  // };

  updateColors = color => {
    this.props.dispatch({
      type: "ADD",
      payload: {
        colorCode: this.state.colorCode,
        shape: this.state.dropdownShape
      }
    })
    this.setState(
      {
        dataHistory: [color, ...this.state.dataHistory],
        colorCode: ""
      }
    );
    // this.props.dispatch({ type: "USED_COLORS", payload: this.state.dataHistory });
    // localStorage.setItem("lastThreeActions",JSON.stringify(this.state.usedColors));
  };

  render() {
    return (
      <div className="isActiveContainer" style={{ paddingTop: "3rem" }}>
        <div className="userDataInputs">
          <ControlPanel
            control={this.handleChange}
            colorCode={this.state.colorCode}
            lastUsedColors={this.state.dataHistory}
            updateColors={this.updateColors}
          />
          <Diagram
            shape={this.state.dropdownShape}
            color={this.state.colorCode}
            dataHistory={this.state.dataHistory}
          />
        </div>
        <div className="uploadSaveFile">
          <SaveLoad save={this.saveProject} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "mapstate");
  return {
    usedColoursInfo: state.colorsInfo
  };
}
export default connect(mapStateToProps)(ActiveProject);
