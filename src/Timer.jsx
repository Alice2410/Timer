import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [timeCounter, setTimeCounter] = useState(0);
  const paused = useRef(true);

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      if (!paused.current) changeCounter()
    }, 1000)

    return () => {
      clearInterval(timeIntervalId)
    };
  },[])

  const toggleTimer = () => {
    paused.current = !paused.current;
  }

  const changeCounter = () => {
    setTimeCounter((counter) => counter + 1)
  }

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
    <div>
      <button onClick={toggleTimer}>Start</button>
      <br />
      <br />
      <span>{getTime()}</span>
    </div>
  )
};

export default Timer;