//import { Router } from "express";
import React, { Component } from "react";
import './App.css';
import GetBlock from "./components/GetBlock";
import ValidateUser from "./components/ValidateUser";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {

		state = {
      visible: true
		};

	render() {
    return(
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/">
                <ValidateUser />
              </Route>
              <Route path="/getblock">
                <GetBlock />
              </Route>
            </Switch>
        </div>
      </Router>

    )
  }

}

/*
<div className="App">
<ValidateUser />
</div>
*/
export default App;
