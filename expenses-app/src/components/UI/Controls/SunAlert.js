import React, { Fragment } from "react";
import "./SunAlert.css";
import SunBackdrop from "./SunBackdrop";
import SunButton from "./SunButton";
import SunActions from "./SunActions";

const SunAlert = (props) => {
  return (
    <Fragment>
      <SunBackdrop
        showBackdrop={props.show}
        onClick={props.closeAlert}
      ></SunBackdrop>

      <div
        className="sun-alert"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-1000vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <header className="header">{props.title}</header>
        <div className="content">
          <h3>{props.message}</h3>
        </div>
        <SunActions>
          <SunButton variant="primary" onClick={props.closeAlert}>
            OK
          </SunButton>
        </SunActions>
      </div>
    </Fragment>
  );
};

export default SunAlert;
