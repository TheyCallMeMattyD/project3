import React from "react";

function Jumbotron({ children }) {
  
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 100, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
