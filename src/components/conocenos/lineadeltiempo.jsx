// LineaDelTiempo.js
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';



  
//import styles from './LineaDelTiempo.module.css';

const LineaDelTiempo = () => {
  const [position, setPosition] = useState(50);
  return (
     <div> 
    <div className="relative mt-40 ml-10 w-[500px] h-[300px] overflow-hidden">
    {/* Imagen de fondo */}
    <Image
      src="/conocenos/FotoCEO.jpg"
      alt="Imagen 1"
      fill
      className="object-cover rounded-xl"
    />

    

    
  </div>
        
        <div className='bg-white absolute top-0 right-0 h-113.5 w-200'>
          <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="text-4xl pt-40 text-center font-semibold text-black"
        >
          ¿Quiénes Somos?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="text-base text-center font-light text-black pt-20"
        >
          Somos una empresa dedicada a la prestación de servicios educativos integrales, 
          de la mejor calidad, con amplio reconocimiento y alianzas estratégicas en el mercado, 
          que acompaña a las instituciones educativas tanto oficiales como privadas, en la 
          búsqueda del mejoramiento continuo y el alcance de sus metas a corto, mediano y largo 
          plazo.
        </motion.p>
        </div>
      </div>
  );
}

export default LineaDelTiempo;
