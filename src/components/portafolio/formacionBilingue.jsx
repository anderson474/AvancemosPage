import React from "react";
import { motion } from "framer-motion";
//import CursosForm from "./cursosForm"; // Asegúrate de tener este componente separado o pega el código dentro de este archivo si lo deseas todo junto.

const FormacionBilingue = () => {
  return (
    <div className="bg-white min-h-screen text-[#003366]">
      <section className="py-16 mr-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Formación Bilingue
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-center text-gray-700 max-w-xl ml-auto"
        >
          Buscamos que nuestros clientes y aliados tengan la oportunidad de desarrollar, fortalecer y dominar una lengua extranjera.
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
          Somos Testing Centre en pruebas internacionales avalado por GEP English Exams.
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Clases convencionales
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Clases de profundización
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Cursos intensivos
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Programas personalizados para diversas audiencias
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Tecnologías innovadoras
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Programas personalizados para diversas audiencias
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Placement Test
          </motion.li>
        </ul>
        </motion.div>
      </section>
    </div>
  );
};
//<CursosForm />
export default FormacionBilingue;