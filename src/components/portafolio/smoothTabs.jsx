import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from 'next/image';
import SistemasEvaluacion from "@/components/portafolio/sistemasEvaluacion";
import FormacionContinua from "@/components/portafolio/formacionContinua";
import FormacionBilingue from "@/components/portafolio/formacionBilingue";
import EducacionInclusiva from "@/components/portafolio/educacionInclusiva";
import Editorial from "@/components/portafolio/editorial";

const tabs = [
  {
    label: "Sistemas De evaluación",
    content: <SistemasEvaluacion />,
    image: "/portafolio/Clases convencionales.png",
  },
  {
    label: "Formación Continua",
    content: <FormacionContinua />,
    image: "/portafolio/Clases personalizadas.png",
  },
  {
    label: "Formación Bilingue",
    content: <FormacionBilingue />,
    image: "/portafolio/Inglés para adultos.png",
  },
  {
    label: "Educación Inclusiva",
    content: <EducacionInclusiva />,
    image: "/portafolio/Inglés para instituciones educativas.png",
  },
  {
    label: "Editorial",
    content: <Editorial />,
    image: "/portafolio/Inglés para niños y jovenes.png",
  },
];

export default function SmoothTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-4 mt-80">
      {/* Botones de tabs */}
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={activeTab === index}
            className={`py-2 px-4 rounded ${
              activeTab === index ? "bg-blue-600 text-white" : "bg-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenedor del contenido animado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="p-6 bg-white border rounded shadow flex items-start space-x-6"
        >
          {/* Imagen con efecto tilt y sombra */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            scale={1.05}
            className="shadow-2xl rounded-xl transition-transform duration-300"
          >
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].label}
              width={500}
              height={400}
              className="object-contain rounded-xl shadow-lg border border-white/40"
            />
          </Tilt>

          {/* Contenido del tab */}
          <div className="flex-1">
            {tabs[activeTab].content}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

