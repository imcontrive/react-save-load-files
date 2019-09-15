import React, { Component } from "react";
import Diagram from "./Diagram";
import ControlPanel from "./ControlPanel";
import SaveLoad from "./SaveLoad";
import { connect } from "react-redux";

class ActiveProject extends Component {
  state = {
    dropdown: "Circle",
    colorCode: "",
    usedColors: []
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  saveProject = () => {
    localStorage.setItem("project", JSON.stringify(this.state));
  };

  //Last Used Colors
  updateColors = color => {
    var colorsArr = this.state.usedColors;
    var length = colorsArr.length;

    if (length === 3) {
      colorsArr.shift();
      colorsArr.push(color);
      this.setState({
        usedColors: colorsArr
      });
      this.props.dispatch({ type: "USED_COLORS", payload: colorsArr });
    } else {
      colorsArr.push(color);
      this.props.dispatch({ type: "USED_COLORS", payload: colorsArr });
      this.setState({
        usedColors: colorsArr
      });
    }
  };

  render() {
    return (
      <div className="isActiveContainer" style={{ paddingTop: "3rem" }}>
        <div className="userDataInputs">
          <ControlPanel
            control={this.handleChange}
            colorCode={this.state.colorCode}
            lastUsedColors={this.state.usedColors}
            updateColors={this.updateColors}
          />
          <Diagram
            shape={this.state.dropdown}
            color={this.state.colorCode}
            usedColors={this.state.usedColors}
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
  return {
    usedColoursInfo: state.colorsInfo
  };
}
export default connect(mapStateToProps)(ActiveProject);
