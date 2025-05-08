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
    <div className="fixed top-20 left-0 w-full z-50">
      {/* Fondo festivo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('/portafolio/fondo-fiesta.jpg')" }} // Cambia por tu imagen
      />

      {/* Confeti animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-2 h-2 rounded-full animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#facc15', '#f472b6', '#38bdf8'][i % 3],
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Tarjeta eCard */}
      <div className="backdrop-blur-md text-white py-6 px-4 shadow-xl rounded-b-xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-wider">Cursos Vacacionales</h2>
            <p className="text-lg font-medium">¡Cupos limitados! ¡Regístrate ya!</p>
          </div>

          {timeLeft ? (
            <div className="flex items-center gap-4 text-xl font-mono bg-white/10 px-4 py-2 rounded-lg shadow-inner">
              <span>{timeLeft.días}d</span>
              <span>{timeLeft.horas}h</span>
              <span>{timeLeft.minutos}m</span>
              <span>{timeLeft.segundos}s</span>
              <Link href="/portafolio">
                <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg shadow transition-transform hover:scale-105">
                  Inscribirme
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-xl font-semibold">¡El evento ha comenzado!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownEcard;

