//import { Router } from "express";
import React, { Component } from "react";
import './App.css';
import Home from "./components/Home";
import GetBlock from "./components/GetBlock";
import ValidateUser from "./components/ValidateUser";
import Redirect from "./components/Redirect";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  state = {
    visible: true
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route component={Home} exact path="/"></Route>
            <Route component={Redirect} path="/redirect"></Route>
            <Route component={GetBlock} path="/getblock"></Route>
            

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
