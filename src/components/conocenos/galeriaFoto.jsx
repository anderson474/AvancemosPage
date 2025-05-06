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
  
    return (
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Galería Fotográfica</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Foto ${index + 1}`}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  