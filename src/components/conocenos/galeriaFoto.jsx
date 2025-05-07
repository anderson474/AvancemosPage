import { useState } from "react";

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

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Galería Fotográfica
      </h2>

      <div className="grid gap-4">
        {/* Imagen principal */}
        <div>
          <img
            className=" w-full max-w-full rounded-lg object-contain object-center md:h-[480px]"
            src={mainImage}
            alt="Imagen principal"
          />
        </div>

        {/* Miniaturas con scroll horizontal */}
        <div className="flex overflow-x-auto gap-4 py-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="object-cover object-center h-20 w-32 rounded-lg cursor-pointer flex-shrink-0 transition hover:opacity-75"
              alt={`Miniatura ${index + 1}`}
              onClick={() => setMainImage(src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

  