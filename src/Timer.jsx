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

  return(
    <div>Initialized</div>
  )
};

export default Timer;