// LineaDelTiempo.js
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
//import styles from './LineaDelTiempo.module.css';

const LineaDelTiempo = () => {
  return (
      
      <div>
        <Image
        src="/conocenos/FotoCEO.jpg"
        width={500}
        height={100}
        alt="Picture of the author"
        className="pt-30"
        />
        <div className='bg-white absolute top-0 right-0 h-113.5 w-213'>
          <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="text-xl pt-40 text-center font-semibold text-black"
        >
          ¿Quiénes Somos?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="text-base text-center font-light text-black pt-10"
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
