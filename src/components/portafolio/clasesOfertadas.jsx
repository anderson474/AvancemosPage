import React from "react";
import { motion } from "framer-motion";
//import CursosForm from "./cursosForm"; // Asegúrate de tener este componente separado o pega el código dentro de este archivo si lo deseas todo junto.

const SistemasEvaluacion = () => {
  return (
    <div className="mt-100 bg-white min-h-screen text-[#003366]">
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Sistemas de Evaluación
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto"
        >
          Ofrecemos programas como Pre-ICFES y preparación para las Pruebas Saber, diseñados para fortalecer las habilidades académicas de los estudiantes y mejorar sus resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10"
        >
          
        </motion.div>
      </section>
    </div>
  );
};
//<CursosForm />
export default SistemasEvaluacion;



