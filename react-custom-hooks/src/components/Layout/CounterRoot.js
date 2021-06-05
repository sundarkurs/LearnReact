import { Fragment } from "react";
import BackwardCounter from "../Counter/BackwardCounter";
import ForwardCounter from "../Counter/ForwardCounter";

const CounterRoot = () => {
  return (
    <Fragment>
      <BackwardCounter></BackwardCounter>
      <ForwardCounter></ForwardCounter>
    </Fragment>
  );
};

export default CounterRoot;
