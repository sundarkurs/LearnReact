import React from "react";
import "./SunButton.css";

const SunButton = (props) => {
  const styles = "sun-button " + props.variant;

  return (
    <button
      type={props.type || "button"}
      disabled={props.disabled}
      className={styles}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default SunButton;
