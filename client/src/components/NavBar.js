import React from "react";

function NavBar() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a className="navbar-brand" href="/"><img src="images/logo.png" alt="homepage" width="100" height="30" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      

    </div>
    <button className="btn btn-success ml-3" data-toggle="modal" data-target="#signUpBtn" >Sign Up</button>
    <button className="btn btn-outline-primary ml-3" data-toggle="modal" data-target="#loginBtn" >Log In</button>
  </nav>
}


export default NavBar;