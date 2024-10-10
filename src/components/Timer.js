import React, { useState, useEffect } from "react";
import '../styles.css';

function Timer({ city, offset }) {
  const [date, setDate] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  const calculateTime = () => {
    const localTime = new Date();
    const utcTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
    const cityTime = new Date(utcTime + 3600000 * offset);
    return cityTime;
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setDate(calculateTime);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, offset]);

  const formatDateTime = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="timer">
      <h2>{city} час:</h2>
      <p>{formatDateTime(date)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Зупинити" : "Запустити"}
      </button>
    </div>
  );
}

export default Timer;
