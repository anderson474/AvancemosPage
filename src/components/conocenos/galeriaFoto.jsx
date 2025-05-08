"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySection() {
  const images = [
    "/conocenos/Avancemos4.jpg",
    "/conocenos/Avancemos5.jpg",
    "/conocenos/Avancemos6.jpg",
    "/conocenos/Avancemos7.jpg",
    "/conocenos/Avancemos8.jpg",
    "/conocenos/Avancemos9.jpg",
    "/conocenos/imagen1.jpeg",
    "/conocenos/imagen2.jpeg",
    "/conocenos/imagen3.jpeg",
    "/conocenos/imagen4.jpeg",
    "/conocenos/imagen5.jpeg",
    "/conocenos/imagen6.jpeg",
    "/conocenos/imagen7.jpeg",
    "/conocenos/imagen8.jpg",
    "/conocenos/imagen9.jpeg",
    "/conocenos/imagen10.jpeg",
    "/conocenos/Nosotros1.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Cambia la imagen automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Galería Fotográfica
      </h2>

      <div className="relative w-full max-h-[500px] overflow-hidden rounded-xl shadow-lg">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Imagen ${index + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] object-contain"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
