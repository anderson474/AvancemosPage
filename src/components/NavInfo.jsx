import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[rgba(45,168,54,1)] text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4 text-sm">&copy; {new Date().getFullYear()} Grupo Educativo Avancemos. Todos los derechos reservados.</p>
        <p className="text-sm mb-1">📞 Teléfono: (+57)(4) 322 1613</p>
        <p className="text-sm mb-4">📍 Dirección: Calle 64A Nro 79A-05 San German, Medellin - Colombia.</p>
        <div className="flex space-x-6">
            <a href=" https://www.facebook.com/GrupoEducativoAvancemos/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="w-6 h-6 text-white hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/grupoeducativoavancemos/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 text-white hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/company/grupo-educativo-avancemos/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="w-6 h-6 text-white hover:text-blue-300" />
            </a>
            <a href="https://www.tiktok.com/@grupo.educativo.a" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="w-6 h-6 text-white hover:text-pink-400" />
            </a>
            <a href="https://www.youtube.com/@comunicacionesavancemos" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-6 h-6 text-white hover:text-red-600" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;