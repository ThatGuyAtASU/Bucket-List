import React from "react";
import {logoutUser} from "./jwt";

function UserNavBar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a className="navbar-brand" href="/"><img src="images/logo.png" width="100" height="30"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user">Account</a>
        </li>
      </ul>
      
      <button onClick={logoutUser} className="btn btn-danger ml-3">Logout</button>
      
      
    </div>
  </nav>
}


export default UserNavBar;