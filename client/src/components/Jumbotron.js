import React from "react";
import "./jumbotron.css";

function Jumbotron(){
    return <div className="jumbotron background jumbotron-fluid">
    <div className="container">
      <h1 className="display-1 text-center text-white mt-3"><strong>Bucket List</strong></h1>
      <p className="lead text-center text-white">A Platform to create your bucket list and share it with others.</p>
    </div>
  </div>
}

export default Jumbotron;