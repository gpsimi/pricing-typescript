"use client"

import React, { useState, useEffect } from 'react';

const CurrentClock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let timerId: ReturnType<typeof setTimeout>;

    const updateClock = () => {
      const now = new Date();
      setTime(now);

      const millisecondsUntilNextSecond = 1000 - now.getMilliseconds();
      timerId = setTimeout(updateClock, millisecondsUntilNextSecond);
    };

    updateClock();

    return () => clearTimeout(timerId);
  }, []);

  const formatTimeUnit = (unit: number) => (unit < 10 ? `0${unit}` : unit);

  if (!isMounted) {
    return null; // Render nothing until the component is mounted
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-white text-6xl font-bold space-x-4">
        <span>{formatTimeUnit(time.getHours())}</span>:
        <span>{formatTimeUnit(time.getMinutes())}</span>:
        <span>{formatTimeUnit(time.getSeconds())}</span>
      </div>
    </div>
  );
};

export default CurrentClock;

