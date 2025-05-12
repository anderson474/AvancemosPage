// ConocenosPage.js
import { useState } from "react";
import Layout from '@/components/layout';
import Image from 'next/image'

const schools = [
  {
    name: "COLEGIO UPB",
    image: "/resultados/antioquia/upb.png",
    password: "Bolivar1111*",
    url: "https://analytics.zoho.com/open-view/2815562000000594785",
    url1:"https://analytics.zoho.com/open-view/2815562000000594725",
  },
  {
    name: "COLEGIO MADRE MARIA MAZZARELLO",
    image: "/resultados/antioquia/madre-maria-mazarello.png",
    password: "Mazzarello11*",
    url: "https://analytics.zoho.com/open-view/2815562000001854975",
    url1:"https://analytics.zoho.com/open-view/2815562000001854918",
  },
  {
    name: "COLEGIO MILITAR JOSE MARÍA CORDOBA",
    image: "/resultados/antioquia/colegioMilitarJoseMariaCordoba.jpeg",
    password: "Militar11*",
    url: "https://analytics.zoho.com/open-view/2815562000000719187",
    url1:"https://analytics.zoho.com/open-view/2815562000000719127",
  },
  {
    name: "COLEGIO MONTESSORI",
    image: "/resultados/antioquia/colegioMontesori.png",
    password: "Montessori11*",
    url: "https://analytics.zoho.com/open-view/2815562000004044021",
    url1:"",
  },
  {
    name: "COLEGIO SAGRADO CORAZÓN MONTEMAYOR",
    image: "/resultados/antioquia/sagradoCoraonmontemayor.jpeg",
    password: "Montemayor11*",
    url: "https://analytics.zoho.com/open-view/2815562000000781132",
    url1:"",
  },
  {
    name: "COLEGIO MANUEL MEJIA VALLEJO",
    image: "/resultados/antioquia/manuelmejiavallejo.png",
    password: "Vallejo11*",
    url: "https://analytics.zoho.com/open-view/2815562000000689628",
    url1:"",
  },
  {
    name: "COLEGIO PANAMERICANO COLOMBO SUECO",
    image: "/resultados/antioquia/panamericanocolombosueco.png",
    password: "ColomboSueco11*",
    url: "https://analytics.zoho.com/open-view/2815562000000737198",
    url1:"https://analytics.zoho.com/open-view/2815562000000737258",
  },
  {
    name: "LICEO SAN RAFAEL",
    image: "/resultados/antioquia/liceosanrafael.png",
    password: "SanRafael11*",
    url: "https://analytics.zoho.com/open-view/2815562000001063514",
    url1:"",
  },
  {
    name: "CENTRO EDUCATIVO NEOSISTEMAS",
    image: "/resultados/antioquia/centroEducativoNeoSistemas.jpeg",
    password: "Neosistemas11*",
    url: "https://analytics.zoho.com/open-view/2815562000000587243",
    url1:"",
  },
  {
    name: "COLEGIO  DIVINO SALVADOR LA ESTRELLA",
    image: "/resultados/antioquia/divinoSalvadorLaEstrella.jpeg",
    password: "Salvador11*",
    url: "https://analytics.zoho.com/open-view/2815562000000575241",
    url1:"",
  },
  {
    name: "ESCUELA NORMAL SUPERIOR ANTIOQUEÑA",
    image: "/resultados/antioquia/normalSuperiorAntioqueña.png",
    password: "NormalSuperior11*",
    url: "https://analytics.zoho.com/open-view/2815562000000545998",
    url1:"",
  },
  {
    name: "COLEGIO PARROQUIAL JUAN PABLO II",
    image: "/resultados/antioquia/parroquialJuanPabloII.png",
    password: "Juanpablo11*",
    url: "https://analytics.zoho.com/open-view/2815562000000609371",
    url1:"",
  },
  {
    name: "COLEGIO LA SALLE DE BELLO",
    image: "/resultados/antioquia/sallebello.png",
    password: "SalledeBello11*",
    url: "https://analytics.zoho.com/open-view/2815562000000612426",
    url1:"https://analytics.zoho.com/open-view/2815562000000612366",
  },
  {
    name: "COLEGIO LA SALLE DE ENVIGADO",
    image: "/resultados/antioquia/salleEnvigado.jpeg",
    password: "SalledeEnvigado11*",
    url: "https://analytics.zoho.com/open-view/2815562000000650828",
    url1:"https://analytics.zoho.com/open-view/2815562000000650768",
  },
  {
    name: "COLEGIO SAN JOSÉ DE LA SALLE",
    image: "/resultados/antioquia/salleColegioSanJose.png",
    password: "SanJose11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000000783894",
  },
  {
    name: "INSTITUTO SAN CARLOS",
    image: "/resultados/antioquia/institutoSanCarlos.png",
    password: "SanCarlos11*",
    url: "https://analytics.zoho.com/open-view/2815562000001047910",
    url1:"https://analytics.zoho.com/open-view/2815562000001047850",
  },
  {
    name: "INST. EDUC SAN PABLO",
    image: "/resultados/antioquia/inEdSanPablo.jpeg",
    password: "Sanpablo11*",
    url: "https://analytics.zoho.com/open-view/2815562000001029065",
    url1:"",
  },
  {
    name: "COL CARMELITANO",
    image: "/resultados/antioquia/colCarmelitano.jpeg",
    password: "Carmelitano11*",
    url: "https://analytics.zoho.com/open-view/2815562000000742788",
    url1:"https://analytics.zoho.com/open-view/2815562000000742848",
  },
  {
    name: "COLEGIO MARIA AUXILIADORA",
    image: "/resultados/antioquia/colegioMariaAuxiliadora.jpeg",
    password: "Auxiliadora11*",
    url: "https://analytics.zoho.com/open-view/2815562000000691993",
    url1:"",
  },
  {
    name: "COLEGIO PARROQUIAL EMAUS",
    image: "/resultados/antioquia/colegioParroquialEmaus.png",
    password: "Emaus11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000000748256",
  },
  {
    name: "COLEGIO NUESTRA SEÑORA DE CHIQUINQUIRA",
    image: "/resultados/antioquia/nuestraSeñoraChiquinquira.png",
    password: "Chinca11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000000750488",
  },
  {
    name: "INST. EDUC AURES",
    image: "/resultados/antioquia/InstEduAures.jpeg",
    password: "Aures11*",
    url: "https://analytics.zoho.com/open-view/2815562000000888985",
    url1:"",
  },
  {
    name: "ESCUELA HERMANA ALCIRA CASTRO",
    image: "/resultados/antioquia/alciraCastro.jpeg",
    password: "Alcira11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000000786983",
  },
  {
    name: "COLEGIO NUESTRA SEÑORA DEL ROSARIO",
    image: "/resultados/antioquia/colegioNuestraSeñoraRosario.jpeg",
    password: "Rosario11*",
    url: "https://analytics.zoho.com/open-view/2815562000000730118",
    url1:"https://analytics.zoho.com/open-view/2815562000000730058",
  },
  {
    name: "INST EDUC CELESTIN FREINET",
    image: "/resultados/antioquia/freinet.png",
    password: "Celestin11*",
    url: "https://analytics.zoho.com/open-view/2815562000000802937",
    url1:"",
  },
  {
    name: "INST EDUC CEVIDA",
    image: "/resultados/antioquia/cevida.png",
    password: "Cevida11*",
    url: "https://analytics.zoho.com/open-view/2815562000000806340",
    url1:"",
  },
  {
    name: "COLEGIO EL CARPINELO",
    image: "/resultados/antioquia/carpinelo.jpeg",
    password: "Carpinelo11*",
    url: "https://analytics.zoho.com/open-view/2815562000000885331",
    url1:"https://analytics.zoho.com/open-view/2815562000000885271",
  },
  {
    name: "INST EDUC LA PRESENTACION",
    image: "/resultados/antioquia/laPresentacion.png",
    password: "Presentacion11*",
    url: "https://analytics.zoho.com/open-view/2815562000000800652",
    url1:"",
  },
  {
    name: "INST EDUC VILLA FLORA",
    image: "/resultados/antioquia/villaFlora.jpeg",
    password: "VillaFlora11*",
    url: "https://analytics.zoho.com/open-view/2815562000001037906",
    url1:"",
  },
  {
    name: "GIMNASIO INTEGRAL SANTA ANA",
    image: "/resultados/antioquia/gimnasioSantaAna.jpeg",
    password: "SantaAna11*",
    url: "https://analytics.zoho.com/open-view/2815562000000797399",
    url1:"",
  },
  {
    name: "UNIDAD EDUCATIVA SAN MARCOS",
    image: "/resultados/antioquia/sanmarcos.png",
    password: "SanMarcos11*",
    url: "https://analytics.zoho.com/open-view/2815562000001070404",
    url1:"https://analytics.zoho.com/open-view/2815562000001070344",
  },
  {
    name: "INSTITUTO PARROQUIAL JESUS DE LA BUENA ESPERANZA",
    image: "/resultados/antioquia/jesusDeLaBuenaEsperanza.png",
    password: "Esperanza11*",
    url: "https://analytics.zoho.com/open-view/2815562000001042904",
    url1:"https://analytics.zoho.com/open-view/2815562000001042844",
  },
  {
    name: "LICEO FRANCISCO RESTREPO MOLINA",
    image: "/resultados/antioquia/franciscorestrepomolina.png",
    password: "Molina11*",
    url: "https://analytics.zoho.com/open-view/2815562000001026642",
    url1:"",
  },
  {
    name: "INSTITUTO VICARIAL JESÚS MAESTRO",
    image: "/resultados/antioquia/vicarialjesusmaestro.png",
    password: "Vicarial11*",
    url: "https://analytics.zoho.com/open-view/2815562000001057570",
    url1:"",
  },
  {
    name: "COLEGIO SAN IGNACIO DE LOYOLA",
    image: "/resultados/antioquia/loyola.png",
    password: "SanIgnacio11*",
    url: "ttps://analytics.zoho.com/open-view/2815562000001376607",
    url1:"",
  },
  {
    name: "INST EDUC MOSEÑOR GERARDO VALENCIA CANO",
    image: "/resultados/antioquia/valenciacano.jpeg",
    password: "Monseñor11*",
    url: "https://analytics.zoho.com/open-view/2815562000000891320",
    url1:"",
  },
  {
    name: "INST EDUC CAMILO C. RESTREPO",
    image: "/resultados/antioquia/camiloCRestrpo.jpeg",
    password: "CamiloCRestrepo11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000001494258",
  },
  {
    name: "INST EDUC OCTAVIO HARRY – JACQUELINE KENNEDY",
    image: "/resultados/antioquia/jacqueline kennedy.jpeg",
    password: "OctavioHarry11*",
    url: "https://analytics.zoho.com/open-view/2815562000001529890",
    url1:"",
  },
  {
    name: "INST EDUC PEDRO LUIS ALVAREZ CORREA",
    image: "/resultados/antioquia/luisalvarezcorrea.jpeg",
    password: "PedroLuis11*",
    url: "https://analytics.zoho.com/open-view/2815562000001605096",
    url1:"",
  },
  {
    name: "MUNICIPIO EL SANTUARIO",
    image: "/resultados/antioquia/santuario.png",
    password: "Santuario11*",
    url: "https://analytics.zoho.com/open-view/2815562000002151065",
    url1:"",
  },
  {
    name: "INSTITUCIÓN EDUCATIVA MANUEL JOSÉ SIERRA",
    image: "/resultados/antioquia/josesierra.jpeg",
    password: "ManuelJose11*",
    url: "https://analytics.zoho.com/open-view/2815562000006685865",
    url1:"",
  },
  {
    name: "COLEGIO CORAZONISTA DE MEDELLÍN",
    image: "/resultados/antioquia/corazonista.jpeg",
    password: "Corazonista11*",
    url: "https://analytics.zoho.com/open-view/2815562000002370317",
    url1:"",
  },
  {
    name: "INST EDUC JESÚS AMIGO SEDE PRINCIPAL",
    image: "/resultados/antioquia/jesusamigosedeprincipal.png",
    password: "JesusPrincipal11*",
    url: "https://analytics.zoho.com/open-view/2815562000002507907",
    url1:"",
  },
  {
    name: "INST EDUC JESÚS AMIGO SEDE SAGRADA FAMILIA",
    image: "/resultados/antioquia/jesusamigosedesagradafamilia.png",
    password: "JesusSagrada11*",
    url: "https://analytics.zoho.com/open-view/2815562000002511291",
    url1:"",
  },
  {
    name: "MUNICIPIO DE CHIGORODÓ",
    image: "/resultados/antioquia/municipio de chigorodo.jpeg",
    password: "Chigorodo11*",
    url: "https://analytics.zoho.com/open-view/2815562000002606058",
    url1:"",
  },
  {
    name: "INST. EDUC. SANTO ÁNGEL  ",
    image: "/resultados/antioquia/santoangel.jpeg",
    password: "SantoAngel11*",
    url: "https://analytics.zoho.com/open-view/2815562000002727105",
    url1:"",
  },
  {
    name: "MUNICIPIO DE CALDAS",
    image: "/resultados/antioquia/municipiocaldas.png",
    password: "Caldas11*",
    url: "https://analytics.zoho.com/open-view/2815562000002755264",
    url1:"",
  },
  {
    name: "INST. EDUC. LA CANDELARIA",
    image: "/resultados/antioquia/lacandelaria.jpeg",
    password: "Candelaria11*",
    url: "https://analytics.zoho.com/open-view/2815562000002794269",
    url1:"",
  },
  {
    name: "COLEGIO JUAN BERNARDONE",
    image: "/resultados/antioquia/juanbernardone.jpeg",
    password: "Bernardone11*",
    url: "https://analytics.zoho.com/open-view/2815562000002934398",
    url1:"",
  },
  {
    name: "COLEGIO SAN LUCAS",
    image: "/resultados/antioquia/sanlucas.jpeg",
    password: "Sanlucas11*",
    url: "https://analytics.zoho.com/open-view/2815562000005545059",
    url1:"",
  },
  {
    name: "COLEGIO ALFRED BINET",
    image: "/resultados/antioquia/alfredbinet.jpeg",
    password: "Alfred11*",
    url: "https://analytics.zoho.com/open-view/2815562000005665670",
    url1:"",
  },
  {
    name: "INSTITUCIÓN EDUCATIVA MARÍA JESÚS MEJÍA",
    image: "/resultados/antioquia/mariajesusmejia.jpeg",
    password: "MariaJesus11*",
    url: "https://analytics.zoho.com/open-view/2815562000005670205",
    url1:"https://analytics.zoho.com/open-view/2815562000005670148",
  },
  {
    name: "COLEGIO VID CONGREGACIÓN MARIANA",
    image: "/resultados/antioquia/congregacionmarian.png",
    password: "ColegioVid11*",
    url: "https://analytics.zoho.com/open-view/2815562000005775175",
    url1:"",
  },
  {
    name: "COLEGIO CALASANZ MEDELLÍN",
    image: "/resultados/antioquia/calazansmedellin.png",
    password: "Calasanz11*",
    url: "https://analytics.zoho.com/open-view/2815562000006031652",
    url1:"https://analytics.zoho.com/open-view/2815562000006031594",
  },
  {
    name: "COLEGIO PARROQUIAL SAN FRANCISCO DE ASÍS",
    image: "/resultados/antioquia/sanfransiscodeasis.png",
    password: "SanFrancisco11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000006334096",
  },
  {
    name: "CENTRO EDUCACIONAL DON BOSCO",
    image: "/resultados/antioquia/donbosco.jpeg",
    password: "DonBosco11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000006347696",
  },
  {
    name: "COLEGIO SANTA CLARA DE ASÍS",
    image: "/resultados/antioquia/santaclaradeasis.png",
    password: "SantaClara11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000006359131",
  },
  {
    name: "INSTITUCIÓN EDUCATIVA SAN JOSÉ TURBO",
    image: "/resultados/antioquia/sanjoseturbo.png",
    password: "SanJoseTurbo11*",
    url: "https://analytics.zoho.com/open-view/2815562000006452119",
    url1:"",
  },
  {
    name: "INSTITUTO CRISTO REY",
    image: "/resultados/antioquia/cristorey.png",
    password: "CristoRey11*",
    url: "",
    url1:"https://analytics.zoho.com/open-view/2815562000006552088",
  },
  {
    name: "INSTITUCIÓN EDUCATIVA ABRAHAM REYES",
    image: "/resultados/antioquia/abrahamreyes.jpeg",
    password: "Abraham11*",
    url: "https://analytics.zoho.com/open-view/2815562000006565535",
    url1:"https://analytics.zoho.com/open-view/2815562000006565592",
  },
  {
    name: "MUNICIPIO DE GIRARDOTA",
    image: "/resultados/antioquia/municipiogirardota.jpeg",
    password: "Girardota11*",
    url: "https://analytics.zoho.com/open-view/2815562000006683054",
    url1:"",
  },
  {
    name: "DISTRITO LASALLISTA NORANDINO",
    image: "/resultados/antioquia/lasallistanorandino.png",
    password: "DistritoLasallista11*",
    url: "https://analytics.zoho.com/open-view/2815562000006738147",
    url1:"",
  },
  {
    name: "COLEGIO SAPIENCIA",
    image: "/resultados/antioquia/sapiencia.jpeg",
    password: "Sapiencia11*",
    url: "https://analytics.zoho.com/open-view/2815562000006846743",
    url1:"https://analytics.zoho.com/open-view/2815562000006846685",
  },
  {
    name: "COLEGIO VERITAS",
    image: "/resultados/antioquia/veritas.jpeg",
    password: "Veritas11*",
    url: "https://analytics.zoho.com/open-view/2815562000006853105",
    url1:"",
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
            placeholder="buscate aqui..."
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
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleOpen(school)}
          >
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-md bg-gray-100 border">
              <img src={school.image} alt={school.name} className="w-full h-full object-contain" />
            </div>
            <p className="text-center text-sm font-bold mt-5 text-green-800">{school.name}</p>
          </div>
        ))}
      </div>

      {selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          {!authenticated ? (
            <div className="flex items-center justify-center h-full">
              <div className="bg-white p-6 rounded-lg w-96 shadow-xl relative">
                <button
                    className="absolute top-8 right-3 text-black hover:text-white text-xl bg-red-700"
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

