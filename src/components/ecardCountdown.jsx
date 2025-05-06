'use client';
import React, { useState, useEffect } from 'react';

const CountdownEcard = () => {
  const targetDate = new Date('2025-06-16T08:00:00');

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return null;

    return {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-20 left-0 w-full bg-green-600 text-white py-4 z-50 shadow-md">
        <div className="flex items-center justify-left space-x-4 text-3xl font-semibold">
        <span>CURSOS VACAIONALES</span>
        <span>¡Cupos limitados!</span>
        <span>¡Regístrate ya!</span>
        {timeLeft ? (
        <div className="text-4xl space-x-2 font-mono">
          <span>{timeLeft.días}d</span>
          <span>{timeLeft.horas}h</span>
          <span>{timeLeft.minutos}m</span>
          <span>{timeLeft.segundos}s</span>
        </div>
      ) : (
        <div className="text-xl font-semibold">¡El evento ha comenzado!</div>
      )}
        </div>
    </div>
  );
};

export default CountdownEcard;

