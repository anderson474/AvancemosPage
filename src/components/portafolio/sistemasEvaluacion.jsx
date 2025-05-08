import React from "react";
import { motion } from "framer-motion";
//import CursosForm from "./cursosForm"; // Asegúrate de tener este componente separado o pega el código dentro de este archivo si lo deseas todo junto.

const SistemasEvaluacion = () => {
  return (
    <div className="bg-white min-h-screen text-[#003366]">
      <section className="py-16 mr-20">
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
          className="text-lg md:text-xl text-center text-gray-700 max-w-xl ml-auto"
        >
          Ofrecemos programas como Pre-ICFES y preparación para las Pruebas Saber, diseñados para fortalecer las habilidades académicas de los estudiantes y mejorar sus resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10"
        >
        <ul className="list-disc pl-5 list-inside space-y-2 text-gray-800 text-lg text-center">
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            >
            Programa de Pre-Saber e intensivos.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            >
            Programa de Pre Universitario AVANCEMOS A LA U.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Programa de nivelaciones y refuerzos.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Programa de orientación vocacional.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Programa ruta del saber hacia la excelencia.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Proyecto Aprender para Avanzar APA.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Analítica de datos.
            </motion.li>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-500 text-lg md:text-xl text-center text-white max-w-xl ml-auto"
            >
            Productos
            </motion.p>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Simulacros saber 9°, 10° y 11°.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Guía de Pre-Saber.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Cuadernillo de ejercitación en Saber 11°.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Pruebas estandarizadas por periodo y por semestre.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Pruebas individuales por área.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Olimpiadas del Saber.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Guía de ejercitación estratégica.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Guía pedagógica de Pre Universitario.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Pruebas de Pre Universitario: Avancemos a la U.
            </motion.li>
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            >
            Cartilla: Plan de mejoramiento en competencias docente.
            </motion.li>
        </ul>
        </motion.div>
      </section>
    </div>
  );
};
//<CursosForm />
export default SistemasEvaluacion;



