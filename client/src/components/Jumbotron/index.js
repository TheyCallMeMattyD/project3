import React from "react";

function Jumbotron({ children }) {
  
  return (
    <div
      style={{ height: 125, clear: "both", paddingTop: 10, textAlign: "center" }}
      className="container jumbotron jumbotron-fluid">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        
    
      {children}
    </div>
  );
}

export default Jumbotron;