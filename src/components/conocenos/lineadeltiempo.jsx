'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LineaDelTiempo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Función para manejar el movimiento del mouse
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;
    setPosition({ x: deltaX, y: deltaY });
  };

  return (
    <div className="flex items-center mt-50 w-full sm:w-full h-[400px]">
      {/* Imagen de fondo con desenfoque */}
      <div
        className="relative w-1/4 h-full mr-4"
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
            className="object-cover rounded-xl"
          />
        </motion.div>
      </div>

      {/* Texto al lado derecho de la imagen */}
      <div className="relative w-1/4">
        {/* Título con animación */}
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="text-4xl pt-10 text-left font-semibold text-black"
        >
          ¿Quiénes Somos?
        </motion.h1>

        {/* Texto con animación */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-base text-left font-light text-black pt-4 px-1"
        >
          Somos una empresa dedicada a la prestación de servicios educativos integrales, 
          de la mejor calidad, con amplio reconocimiento y alianzas estratégicas en el mercado, 
          que acompaña a las instituciones educativas tanto oficiales como privadas, en la 
          búsqueda del mejoramiento continuo y el alcance de sus metas a corto, mediano y largo 
          plazo.
        </motion.p>
        
      </div>
      <div
        className="relative w-1/4 h-full mr-2"
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
            className="object-cover rounded-xl"
          />
        </motion.div>
      </div>
      <div className="relative w-1/4">
      <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="text-lg text-left font-semibold text-black"
        >
          Misión
        </motion.h1>
        {/* Texto con animación */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-base text-left font-light text-black px-6"
        >
        Impartimos formación con calidad y pertinencia en todos nuestros programas.
        Cumplimos con los lineamientos del Ministerio de Educación, la Secretaría de Educación y el SENA.
        También atendemos los requisitos de entidades del sector educativo, empresarial y certificadoras.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="text-lg text-left font-semibold text-black"
        >
          Visión
        </motion.h1>
        {/* Texto con animación */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-base text-left font-light text-black px-6"
        >
        Para el año 2030, la Fundación Avancemos será líder en educación a nivel local y nacional.
        Ofrecerá servicios innovadores y de calidad que impulsen el desarrollo integral y competitivo.
        Además, facilitará procesos educativos e inclusivos, superando barreras de tiempo y espacio
        </motion.p>
      </div>
    </div>
  );
}

export default LineaDelTiempo;



