import React, {FC, useEffect, useState} from "react";

interface TimeDisplayValuesType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// const nextYear = new Date().getFullYear() + 1;
// const targetDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
const targetDate = new Date(`Dec 26, 2023 20:00:00`).getTime();

const generateTimeDisplay = (): TimeDisplayValuesType => {
  const rightJustNow = new Date().getTime();
  const runway = targetDate - rightJustNow;
  const stateObj = {
    days: Math.floor(runway / (1000 * 60 * 60 * 24)),
    hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((runway % (1000 * 60)) / 1000)
  };
  return stateObj;
};

const Timer: FC = () => {
  const [timeDisplay, setTimeDisplay] = useState<TimeDisplayValuesType>(
    generateTimeDisplay
  );

  useEffect(() => {
    setInterval(() => setTimeDisplay(generateTimeDisplay), 1000);
  }, []);

  return (
    <>
      {
        (timeDisplay.seconds === 0) && (timeDisplay.minutes === 0) && (timeDisplay.hours === 0) ?
          <p style={{fontSize: '22px'}}>
            You are good to go!
          </p>
          :
          <>
            <div className="countdown-item">
              <p>{timeDisplay.hours < 10 && 0}{timeDisplay.hours}</p>
              <span>Hours</span>
            </div>
            <i>:</i>
            <div className="countdown-item">
              <p>{timeDisplay.minutes < 10 && 0}{timeDisplay.minutes}</p>
              <span>Minutes</span>
            </div>
            <i>:</i>
            <div className="countdown-item">
              <p>{timeDisplay.seconds < 10 && 0}{timeDisplay.seconds}</p>
              <span>Seconds</span>
            </div>
          </>
      }
    </>
  );
};

export default Timer;
