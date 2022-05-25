import React, { Component, Fragment } from "react";
import "../src/assets/css/custom.css";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app container py-5">
          <div className="alert alert-warning">No Data</div>
        </div>
      </Fragment>
    );
  }
}

export default App;

