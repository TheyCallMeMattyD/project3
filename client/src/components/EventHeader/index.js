import React from "react";

function EventHeader({ children }) {
  
  return (
    <div
      style={{ height: 125, clear: "both", paddingTop: 10, textAlign: "center" }}
      className="page-header pageHeader mb-3 shadow-lg p-3 mb-5 rounded"
    >
      {children}
    </div>
  );
}

export default EventHeader;
