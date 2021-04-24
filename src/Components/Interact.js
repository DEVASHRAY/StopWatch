import React from "react";
import useApp from "../App";

const Interact = (props) => {
  return (
    <>
      <div className="action">
        <button class="start" onClick={props.handleStart}>
          Start
        </button>
        <button class="stop" onClick={props.handleStop}>
          Stop
        </button>
        <button class="reset" onClick={props.handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Interact;
