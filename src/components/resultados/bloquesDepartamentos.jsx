export default function RegionesGrid() {
    const regiones = [
      "Aspaen",
      "Antioquia",
      "Casanare",
      "Norte de Santander",
      "Santander",
      "Risaralda",
      "Valle del Cauca",
    ];
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
          {regiones.map((region, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out rounded-lg p-6 text-center text-green-700 font-semibold text-lg"
            >
              {region}
            </div>
          ))}
        </div>
      </div>
    );
  }
  