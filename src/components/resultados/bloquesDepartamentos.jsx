import Image from 'next/image'
import Link from 'next/link'

export default function RegionesGrid() {
  const departments = [
    {
      name: "Aspaen",
      image: "/resultados/aspaen.jpeg",
      path: "aspaen",
    },
    {
      name: "Antioquia",
      image: "/resultados/antioquia.jpeg",
      path: "antioquia",
    },
    {
      name: "Casanare",
      image: "/resultados/casanare.jpeg",
      path: "casanare",
    },
    {
      name: "Norte de Santander",
      image: "/resultados/norteDeSantander.png",
      path: "norte-de-santander",
    },
    {
      name: "Santander",
      image: "/resultados/santander.png",
      path: "santander",
    },
    {
      name: "Risaralda",
      image: "/resultados/risaralda.webp",
      path: "risaralda",
    },
    {
      name: "Valle del Cauca",
      image: "/resultados/valleDelCauca.jpeg",
      path: "valle-del-cauca",
    },
  ];

  return (
    <div className='w-full mt-50'>
      <Image
        src="/resultados/bannerAnaliticaDatos.png"
        width={1900}
        height={100}
        alt="Banner"
        className="rounded-lg shadow-xl"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 mx-20">
        {departments.map((dep, index) => (
          <Link href={`/departamentos/${dep.path}`} key={index}>
            <div className="flex items-center justify-between bg-blue-800 text-white rounded-xl p-4 shadow-lg hover:scale-105 transition-all duration-300 transform cursor-pointer hover:bg-blue-700 hover:rotate-3">
              <div className="flex items-center">
                <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-lg overflow-hidden -ml-10 z-10">
                  <img src={dep.image} alt={dep.name} className="w-full h-full object-cover" />
                </div>
                <span className="ml-4 text-lg font-semibold uppercase tracking-wide">{dep.name}</span>
              </div>
              <span className="text-2xl ml-4 transform transition-all duration-300 hover:text-green-400">➤</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
