import React from "react";
import useApp from "../App";

const Interact = (props) => {
  return (
    <>
      <div className="action">
        <button className="start" onClick={props.handleStart}>
          Start
        </button>
        <button className="stop" onClick={props.handleStop}>
          Stop
        </button>
        <button className="reset" onClick={props.handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Interact;
