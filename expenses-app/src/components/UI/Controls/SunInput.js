import React from "react";
import "./SunInput.css";

const SunInput = (props) => {
  let styles = "sun-input";
  if (props.invalid) {
    styles = "sun-input invalid";
  }
  return (
    <input
      className={styles}
      // className={`${classes.SunInput} ${props.className}`}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      min={props.min}
      max={props.max}
      step={props.step}
    ></input>
  );
};

export default SunInput;
