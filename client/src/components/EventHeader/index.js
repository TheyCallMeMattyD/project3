import React from "react";

function EventHeader({ children }) {
  
  return (
    <div
      style={{ height: 125, clear: "both", paddingTop: 10, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default EventHeader;
