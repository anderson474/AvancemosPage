// ConocenosPage.js
import { useState } from "react";
import Layout from '@/components/layout';
import Image from 'next/image'

const schools = [
  {
    name: "INSTITUCION GINEBRA LA SALLE",
    image: "/resultados/valle-del-cauca/INSTITUCION GINEBRA LA SALLE.jpeg",
    password: "Ginebra11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001040748",
  },
  {
    name: "LICEO MONTESSORI BILINGUE - PALMIRA",
    image: "/resultados/valle-del-cauca/LICEO MONTESSORI BILINGUE - PALMIRA.png",
    password: "LiceoMontessori11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001061414",
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
                    className="pt-30"
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