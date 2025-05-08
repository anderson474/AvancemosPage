// ConocenosPage.js
import { useState } from "react";
import Layout from '@/components/layout';
import Image from 'next/image'

const schools = [
  {
    name: "ASPAEN",
    image: "/resultados/aspaen/aspaen.jpeg",
    password: "Aspaen11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001378885",
  },
  {
    name: "ASPAEN PALMARES",
    image: "/resultados/aspaen/aspaenpalmares.png",
    password: "Palmares11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001589950",
  },
  {
    name: "ASPAEN FRAGUA",
    image: "/resultados/aspaen/aspaenfragua.jpeg",
    password: "LaFragua11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001587964",
  },
  {
    name: "ASPAEN HORIZONTES",
    image: "/resultados/aspaen/aspaenhorizontes.png",
    password: "Horizontes11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001423378",
  },
  {
    name: "ASPAEN GIMNASIO CARTAGENA",
    image: "/resultados/aspaen/gimnasiocartag.png",
    password: "GimnasioCartagena11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001421345",
  },
  {
    name: "ASPAEN TACURI",
    image: "/resultados/aspaen/tacuri.png",
    password: "Tacuri11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001434889",
  },
  {
    name: "ASPAEN SAUCARA",
    image: "/resultados/aspaen/saucara.png",
    password: "Saucara11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001432682",
  },
  {
    name: "ASPAEN CARTAGENA DE INDIAS",
    image: "/resultados/aspaen/cartagenaindias.jpeg",
    password: "CartagenaDeIndias11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001673282",
  },
  {
    name: "ASPAEN JUANAMBU",
    image: "/resultados/aspaen/juanambu.png",
    password: "Juanambu11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001417722",
  },
  {
    name: "ASPAEN ALTA MAR",
    image: "/resultados/aspaen/altamar.png",
    password: "AltaMar11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001586428",
  },
  {
    name: "ASPAEN CORALES",
    image: "/resultados/aspaen/corales.png",
    password: "Corales11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001691100",
  },
  {
    name: "ASPAEN ALMERIA",
    image: "/resultados/aspaen/almeria.png",
    password: "Almeria11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001591856",
  },
  {
    name: "ASPAEN CANTILLANA",
    image: "/resultados/aspaen/cantillana.png",
    password: "Cantillana11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001584440",
  },
  {
    name: "ASPAEN ALCAZARES",
    image: "/resultados/aspaen/alcazares.png",
    password: "Alcazares11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001427919",
  },
  {
    name: "ASPAEN CEREZOS",
    image: "/resultados/aspaen/cerezos.png",
    password: "Cerezos11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001430549",
  },
  {
    name: "ASPAEN",
    image: "/resultados/aspaen/yumana.png",
    password: "Yumana11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001533983",
  },
  {
    name: "ASPAEN IRAGUA",
    image: "/resultados/aspaen/iragua.png",
    password: "Iragua11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001425815",
  },
  {
    name: "ASPAEN ALMANARES",
    image: "/resultados/aspaen/almenares.jpeg",
    password: "Almenares11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000005276591",
  },
  {
    name: "ASPAEN TUNADAMA",
    image: "/resultados/aspaen/tundama.png",
    password: "Tundama11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000005275055",
  },
  
];

export default function EscudosGrid() {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = (school) => {
    setSelectedSchool(school);
    setPasswordInput("");
    setAuthenticated(false);
  };

  const handleClose = () => {
    setSelectedSchool(null);
  };

  const handleSubmit = () => {
    if (passwordInput === selectedSchool.password) {
      setAuthenticated(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
            <Image
                    src="/resultados/bannerAnaliticaDatos.png"
                    width={1900}
                    height={100}
                    alt="Banner"
                    className="pt-50"
                  />
            <div className="flex justify-center mb-4 mt-10">
              <input
                type="text"
                placeholder="Buscar colegio..."
                className="w-full max-w-md p-2 border rounded text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-2  ">
          {filteredSchools.map((school, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer border-solid border-2"
                onClick={() => handleOpen(school)}
              >
                <div className="w-55 h-55 rounded-full overflow-hidden shadow-md bg-gray-100 border">
                  <img src={school.image} alt={school.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-center text-sm font-bold mt-2 text-black" class="italic">{school.name}</p>
              </div>
            ))}
          </div>
      
          {selectedSchool && (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
              {!authenticated ? (
                <div className="flex items-center justify-center h-full">
                  <div className="bg-white p-6 rounded-lg w-96 shadow-xl relative">
                    <button
                      className="absolute top-2 right-3 text-gray-600 hover:text-red-500"
                      onClick={handleClose}
                    >
                      ✖
                    </button>
      
                    <h2 className="text-xl text-black font-bold mb-4 text-center">
                      {selectedSchool.name}
                    </h2>
      
                    <label className="block mb-2 text-sm text-gray-700">
                      Ingrese la contraseña:
                    </label>
                    <input
                      type="password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full border-black text-black border rounded px-3 py-2 mb-4"
                    />
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                    >
                      Ver contenido
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex w-full h-screen relative">
                  <button
                    className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl z-10"
                    onClick={handleClose}
                  >
                    ✖
                  </button>
    
                  {selectedSchool.url && !selectedSchool.url1 && (
                    <iframe
                      src={selectedSchool.url}
                      title={`${selectedSchool.name} - Contenido`}
                      className="w-full h-full border-none"
                    />
                  )}
    
                  {selectedSchool.url1 && !selectedSchool.url && (
                    <iframe
                      src={selectedSchool.url1}
                      title={`${selectedSchool.name} - Contenido`}
                      className="w-full h-full border-none"
                    />
                  )}
    
                  {selectedSchool.url && selectedSchool.url1 && (
                    <>
                      <iframe
                        src={selectedSchool.url}
                        title={`${selectedSchool.name} - Simulacros Saber`}
                        className="w-1/2 h-full border-none"
                      />
                      <iframe
                        src={selectedSchool.url1}
                        title={`${selectedSchool.name} - Pruebas Externas`}
                        className="w-1/2 h-full border-none"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        </Layout>
  );
}  

