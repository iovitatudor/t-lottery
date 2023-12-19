import React, {FC, useEffect, useState} from "react";

const Countdown: FC = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('12/25/2020').getTime());
  const [state, setState] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days: string = Math.floor(distanceToDate / (1000 * 60 * 60 * 24)).toString();
      let hours: string = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ).toString();
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      ).toString();
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000).toString();

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(parseInt(hours))) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(parseInt(minutes))) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(parseInt(seconds))) {
        seconds = `0${seconds}`;
      }

      setState({days: days, hours: hours, minutes, seconds});
    }
  };

  return (
    <>
      <div className="countdown-item">
        {/*<p>{state.hours || '00'}</p>*/}
        <p>02</p>
        <span>Hours</span>
      </div>
      :
      <div className="countdown-item">
        {/*<p>{state.minutes || '00'}</p>*/}
        <p>33</p>
        <span>Minutes</span>
      </div>
      :
      <div className="countdown-item">
        {/*<p>{Math.abs(parseInt(state.seconds)) || '00'}</p>*/}
        <p>20</p>
        <span>Seconds</span>
      </div>
    </>
  );
};

export default Countdown;
