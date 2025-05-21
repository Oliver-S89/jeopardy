import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds, onComplete, answerOpened }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (answerOpened) {
      return;
    }
    if (seconds <= 0) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, onComplete]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="text-3xl font-mono text-center p-4">
      ⏳ {formatTime(seconds)}
    </div>
  );
};

export default CountdownTimer;
