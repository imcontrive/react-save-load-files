import React, { Component } from "react";
import { connect } from "react-redux";
import ControlPanel from "./ControlPanel";
import Diagram from "./Diagram";

class ActiveProject extends Component {
  state = {
    selectedFile: null,
    isActiveProject: ""
  };

  componentDidMount() {
    console.log(this.props.match.params.id, "Active Project");
    this.setState({ isActiveProject: this.props.match.params.id });
  }

  //Logic for Select a Stored File for Upload
  fileSelectedHandler = e => {
    const file = e.target.files[0];
    if (file) {
      let fr = new FileReader();
      fr.onloadend = () =>
        this.props.dispatch({ type: "ADD", payload: JSON.parse(fr.result) });
      fr.readAsText(file);
    }
  };

  //Logic for Download Projects
  downloadProject = () => {
    const { history, currentIndex } = this.props.allHistory;
    const a = document.createElement("a");
    a.className = "aClassName";
    const file = new Blob([JSON.stringify(history)], {
      type: "text/plain"
    });
    a.href = URL.createObjectURL(file);
    a.download = "colorInfo.txt";
    document.body.appendChild(a);
    a.click();
  };

  render() {
    return (
      <div className="isActiveContainer" style={{ paddingTop: "3rem" }}>
        <div className="userDataInputs">
          <ControlPanel isActiveProject={this.state.isActiveProject} />
          <Diagram />
        </div>
        <div className="uploadSaveFile">
          <div>
            <span className="upDown">
              <span className="project">
                <img
                  src="/Media/load.svg"
                  className="updown-icons"
                  alt="Load"
                />
                <input
                  className="custom-file-input"
                  type="file"
                  name={this.state.selectedFile}
                  id="file01"
                  onChange={this.fileSelectedHandler}
                />
              </span>
              <span className="project" onClick={this.downloadProject}>
                <img
                  src="/Media/save.svg"
                  className="updown-icons"
                  alt="Save"
                />
                Save Project
              </span>
            </span>
          </div>
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

export default connect(mapStateToProps)(ActiveProject);
