import React from "react";
import useApp from "../App";
import Interact from "./Interact";

let timer;

let startTime;
let updatedTime;
let difference;
let savedTime; 

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
  // const handleStart = () => {
  //   timer = setInterval(() => {
  //     setMillisec((prev) => {
  //       if (prev === 100) {
  //         setSec((prevB) => {
  //           if (prevB === 60) {
  //             setMin((prevC) => {
  //               if (prevC === 60) {
  //                 setHr((prevD) => prevD + 1);
  //                 return 0;
  //               }
  //               return prevC + 1;
  //             });
  //             return 0;
  //           }
  //           return prevB + 1;
  //         });
  //         return 0;
  //       }
  //       return prev + 1;
  //     });
  //   }, 10);
  //   console.log(timer);
  // };

  const handleStart = () => {
    startTime = new Date();
    startTime = startTime.getTime();
    timer = setInterval(runTheClock, 1000);
  };

  function runTheClock() {
    updatedTime = new Date();
    updatedTime = updatedTime.getTime();
    
    if (savedTime){ 
      difference = (updatedTime - startTime) + savedTime;
    }else{
      difference =  updatedTime - startTime;
    }
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);


    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    setSec(seconds);
    setMin(minutes);
    setHr(hours);
  }
  
  const handleStop = () => {
    savedTime = difference;
    clearInterval(timer);  
  };
  const handleReset = () => {
    clearInterval(timer);
    setMillisec("00");
    setSec("00");
    setMin("00");
    setHr("00");
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
