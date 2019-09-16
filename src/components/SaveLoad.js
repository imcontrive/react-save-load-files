import React, { Component } from "react";


export default class SaveLoad extends Component {
  state={
    selectedFile: null
  }
  fileSelectedHandler = e => {
    console.log(e.target.files[0],"file selected")
    this.setState({selectedFile: e.target.files[0]})
  }
  fileUploadHandler =() => {
    localStorage.setItem("StoreFiles",JSON.stringify(this.state.selectedFile));
  }
  render() {
    return (
      <div>
        <span className="upDown">
          <span className="project">
            <input
              type="file"
              name={this.state.selectedFile}
              id=""
              onChange={this.fileSelectedHandler}
            />
            <i
              className="fas fa-caret-square-up icon"
              onClick={this.fileUploadHandler}
            />
            Load Project
          </span>
          <span className="project">
            <i
              className="fas fa-caret-square-down icon"
              onClick={this.saveProject}
            />
            Save Project
          </span>
        </span>
      </div>
    );
  }
}
