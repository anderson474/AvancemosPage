'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LineaDelTiempo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;
    setPosition({ x: deltaX, y: deltaY });
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full px-4 md:px-10 py-10 mt-50 gap-6 md:gap-4">
      {/* Imagen izquierda */}
      <div
        className="relative w-full md:w-1/4 h-64 md:h-[400px]"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="object-cover rounded-xl w-full h-full"
          style={{
            transform: `perspective(1000px) rotateX(${position.y * 10}deg) rotateY(${position.x * 10}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src="/conocenos/FotoCEO.jpg"
            alt="Imagen 1"
            fill
            className="object-contain rounded-xl"
          />
        </motion.div>
      </div>

      {/* Texto de Quiénes Somos */}
      <div className="w-full md:w-1/4">
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-semibold text-black text-left"
        >
          ¿Quiénes Somos?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-sm md:text-base font-light text-black text-left pt-4"
        >
          Somos una empresa dedicada a la prestación de servicios educativos integrales, de la mejor calidad, con amplio reconocimiento y alianzas estratégicas en el mercado, que acompaña a las instituciones educativas tanto oficiales como privadas, en la búsqueda del mejoramiento continuo y el alcance de sus metas a corto, mediano y largo plazo.
        </motion.p>
      </div>

      {/* Imagen derecha */}
      <div
        className="relative w-full md:w-1/4 h-64 md:h-[400px]"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="object-cover rounded-xl w-full h-full"
          style={{
            transform: `perspective(1000px) rotateX(${position.y * 10}deg) rotateY(${position.x * 10}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src="/conocenos/CEO.jpg"
            alt="Imagen 2"
            fill
            className="object-contain rounded-xl"
          />
        </motion.div>
      </div>

      {/* Misión y Visión */}
      <div className="w-full md:w-1/4 space-y-4">
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="text-lg md:text-xl font-semibold text-black"
        >
          Misión
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-sm md:text-base font-light text-black"
        >
          Impartimos formación con calidad y pertinencia en todos nuestros programas. Cumplimos con los lineamientos del Ministerio de Educación, la Secretaría de Educación y el SENA.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="text-lg md:text-xl font-semibold text-black"
        >
          Visión
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-sm md:text-base font-light text-black"
        >
          Para el año 2030, la Fundación Avancemos será líder en educación a nivel local y nacional. Ofrecerá servicios innovadores y de calidad que impulsen el desarrollo integral y competitivo.
        </motion.p>
      </div>
    </div>
  );
};

export default LineaDelTiempo;



