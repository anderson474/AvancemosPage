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
    <div className='w-full mt-40'>
      <Image
        src="/resultados/bannerAnaliticaDatos.png"
        width={1900}
        height={100}
        alt="Banner"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {departments.map((dep, index) => (
          <Link href={`/departamentos/${dep.path}`} key={index}>
            <div className="flex items-center justify-between bg-blue-800 text-white rounded-full p-2 pr-4 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center -ml-4 mr-2 overflow-hidden">
                  <img src={dep.image} alt={dep.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold uppercase">{dep.name}</span>
              </div>
              <span className="text-xl ml-2">➤</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
