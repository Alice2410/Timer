import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeCounter, setTimeCounter] = useState(0);

  useEffect(() => {
    const timeIntervalId = setInterval(() => setTimeCounter((counter) => counter + 1), 1000)

    return () => {
      clearInterval(timeIntervalId)
    };
  },[])

  const getFormatedTimeString = (time) => {
    return time < 10 ? `0${time}` : time;
  }

  const getTime = () => {
    const seconds = timeCounter % 60;
    const totalMinutes = (timeCounter - seconds) / 60;
    const minutes = totalMinutes % 60;
    const hours = (totalMinutes - minutes) / 60 % 100;

    return `${getFormatedTimeString(hours)}:${getFormatedTimeString(minutes)}:${getFormatedTimeString(seconds)}`
  }

  return(
    <div>{getTime()}</div>
  )
};

export default Timer;