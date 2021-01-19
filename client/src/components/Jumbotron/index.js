import React from "react";

function Jumbotron({ children }) {
  
  return (
    <div
      style={{ height: 125, clear: "both", paddingTop: 10, textAlign: "left" }}
      className="container jumbotron jumbotron-fluid">
          <h1 className="display-4">Run4... Pizza?</h1>
          <p className="lead">Run for whatever you want, just do it together. Social made simple.</p>
        
    
      {children}
    </div>
  );
}

export default Jumbotron;