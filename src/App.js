import React, { Component } from "react";
import './App.css';
import GetBlock from "./components/GetBlock";
import ValidateUser from "./components/ValidateUser";

class App extends React.Component {

		state = {
      visible: true
		};

	render() {
    return(
      <div className="App">
        <ValidateUser />
      </div>
    )
  }

}

export default App;
