import React, { Component } from "react";
import ControlPanel from "./ControlPanel";
import Diagram from "./Diagram";
// import SaveLoad from "./SaveLoad";

export default class ActiveProject extends Component {
  state = {
    selectedFile: null,
    location: ""
  };

  componentDidMount() {
    // console.log(this.props.history.location.pathname, "location");
    this.setState({ location: this.props.history.location.pathname });
  }

  fileSelectedHandler = e => {
    console.log(e.target.files[0], "file selected");
    this.setState({ selectedFile: e.target.files[0] });
  };
  uploadProject = () => {
    console.log("file Uploaded", this.state.selectedFile);
    localStorage.setItem("StoreFiles", JSON.stringify(this.state.selectedFile));
  };
  // function for download projects
  downloadProject = () => {
    console.log("download Project");
    fetch(`http://localhost:3000${this.state.location}`).then(response => {
      response.blob().then(blob => {
        console.log("blob", blob);
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "project.jpeg";
        a.click();
      });
      //window.location.href = response.url;
    });
  };

  render() {
    return (
      <div className="isActiveContainer" style={{ paddingTop: "3rem" }}>
        <div className="userDataInputs">
          <ControlPanel />
          <Diagram />
        </div>
        <div className="uploadSaveFile">
          <div>
            <span className="upDown">
              <span className="project" onClick={this.uploadProject}>
                {/* <input
                  type="file"
                  name={this.state.selectedFile}
                  id=""
                  onChange={this.fileSelectedHandler}
                /> */}
                <img
                  src="/Media/load.svg"
                  className="updown-icons"
                  alt="Load"
                />
                Load Project
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
