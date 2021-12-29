import React from "react";
import ReactDOM from "react-dom";
import RippleElement from "./RippleElement";

ReactDOM.render(
  <React.StrictMode>
    <RippleElement>
      <div style={{ backgroundColor: "black", height: "30px",width: "90px" }}></div>
    </RippleElement>
  </React.StrictMode>,
  document.getElementById("root")
);
