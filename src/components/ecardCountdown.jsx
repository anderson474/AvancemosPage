'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <div className="fixed top-20 left-0 w-full bg-green-600 text-white py-4 z-40 shadow-md">
        <div className="flex items-center justify-left space-x-4 text-2xl font-semibold">
        <span>CURSOS VACAIONALES</span>
        <span>¡Cupos limitados!</span>
        <span>¡Regístrate ya!</span>
        {timeLeft ? (
        <div className="text-2xl space-x-4 font-mono fixed right-1">
          <span>{timeLeft.días}d</span>
          <span>{timeLeft.horas}h</span>
          <span>{timeLeft.minutos}m</span>
          <span>{timeLeft.segundos}s</span>
          <Link href='/portafolio'>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs me-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                inscribirme
              </button>
        </Link>
        </div>
        
      ) : (
        <div className="text-xl font-semibold">¡El evento ha comenzado!</div>
      )}
        </div>
    </div>
  );
};

export default CountdownEcard;

