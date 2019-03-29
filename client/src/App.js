import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { setCurrentUser } from "./components/jwt";
import axios from 'axios';
import Profile from "./pages/Profile";
import MembersHome from "./pages/MembersHome";
if (localStorage.getItem('jwtToken')) {
  var user = setCurrentUser(localStorage.getItem('jwtToken')).payload;
  axios.get().then().catch();

}

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={localStorage.getItem('jwtToken') ? MembersHome : Home} />
            <Route exact path="/user" component={localStorage.getItem('jwtToken') ? Profile : () => window.location.replace("/")} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
