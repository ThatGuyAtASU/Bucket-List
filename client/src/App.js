import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MembersHome from "./pages/MembersHome";

class App extends Component {

  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={localStorage.getItem('jwtToken') ? MembersHome : Home} />
            <Route exact path="/user" component={localStorage.getItem('jwtToken') ? Profile : Home} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
