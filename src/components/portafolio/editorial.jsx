import React from "react";
import { motion } from "framer-motion";
//import CursosForm from "./cursosForm"; // Asegúrate de tener este componente separado o pega el código dentro de este archivo si lo deseas todo junto.

const Editorial = () => {
  return (
    <div className="bg-white min-h-screen text-[#003366]">
      <section className="py-16 mr-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-right"
        >
          Editorial
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10"
        >
        <ul className="list-disc pl-5 list-inside space-y-2 text-gray-800 text-lg text-right">
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Impresión
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Corporativo publicomercial
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Empaques
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Producción de cartón
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Exhibidores
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Productos especiales
          </motion.li>
          <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          Souvenir
          </motion.li>
        </ul>
        </motion.div>
        
      </section>
    </div>
  );
};
//<CursosForm />
export default Editorial;