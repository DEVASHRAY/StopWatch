import React from "react";
import useApp from "../App";
import Interact from "./Interact";

let timer;
const Timer = () => {
  const {
    millisec,
    setMillisec,
    sec,
    setSec,
    min,
    setMin,
    hr,
    setHr,
  } = useApp();
  const handleStart = () => {
    timer = setInterval(() => {
      setMillisec((prev) => {
        if (prev === 100) {
          setSec((prevB) => {
            if (prevB === 60) {
              setMin((prevC) => {
                if (prevC === 60) {
                  setHr((prevD) => prevD + 1);
                  return 0;
                }
                return prevC + 1;
              });
              return 0;
            }
            return prevB + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 10);
    console.log(timer);
  };
  const handleStop = () => {
    clearInterval(timer);
  };

  const handleReset = () => {
    clearInterval(timer);
    setMillisec(0);
    setSec(0);
    setMin(0);
    setHr(0);
  };

  return (
    <>
      <div className="parent">
        <div className="main">
          <h1 className="heading">Stop Watch</h1>
          <div className="timer">
            <div className="hour">{hr}</div>
            <div className="min">{min}</div>
            <div className="sec">{sec}</div>
            <div className="millisec">{millisec}</div>
          </div>
          <Interact
            handleStart={handleStart}
            handleStop={handleStop}
            handleReset={handleReset}
          />
        </div>
      </div>
    </>
  );
};
export default Timer;
