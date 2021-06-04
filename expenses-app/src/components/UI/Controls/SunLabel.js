import React from "react";
import "./SunLabel.css";

const SunLabel = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="sun-label">
      {props.children}
    </label>
  );
};

export default SunLabel;
