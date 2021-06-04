import React, { Fragment } from "react";
import "./SunModal.css";
import SunBackdrop from "./SunBackdrop";

const SunModal = (props) => {
  return (
    <Fragment>
      <SunBackdrop
        showBackdrop={props.show}
        closeBackdrop={props.modalClosed}
      ></SunBackdrop>
      <div
        className="sun-modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-1000vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default SunModal;
