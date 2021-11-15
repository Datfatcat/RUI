import React, { Component } from "react";
import './App.css';
import GetBlock from "./components/GetBlock";

class App extends React.Component {

		state = {
      visible: true
		};

	render() {
    return(
      <div className="App">
        <GetBlock />
      </div>
    )
  }

}

export default App;
