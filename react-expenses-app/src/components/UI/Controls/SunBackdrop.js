import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./SunBackdrop.css";

const SunBackdropRoot = (props) => {
  if (props.showBackdrop) {
    return <div className="sun-backdrop" onClick={props.onClick}></div>;
  }

  return null;
};

const SunBackdrop = (props) => {
  const rootElement = document.getElementById("sun-backdrop-root");

  // Rendering the SunBackdrop component on the specified DOM element
  // Element "sun-backdrop-root" is defined in the index.html.
  if (rootElement) {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <SunBackdropRoot {...props}></SunBackdropRoot>,
          rootElement
        )}
      </Fragment>
    );
  }

  return <SunBackdropRoot {...props}></SunBackdropRoot>;
};

export default SunBackdrop;
