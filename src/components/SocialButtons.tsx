// components/SocialButtons.tsx
import { FaFacebookF, FaInstagram,  FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col space-y-2">
      <a
        href="https://www.facebook.com/GrupoEducativoAvancemos/?locale=es_LA"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full shadow hover:scale-110 transition-transform"
      >
        <FaFacebookF className="text-white"/>
      </a>
      <a
        href="https://www.instagram.com/grupoeducativoavancemos/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-full shadow hover:scale-110 transition-transform"
      >
        <FaInstagram className="text-white"/>
      </a>
      <a
        href="https://www.linkedin.com/company/grupo-educativo-avancemos/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 text-white p-3 rounded-full shadow hover:scale-110 transition-transform"
      >
        <FaLinkedinIn className="text-white"/>
      </a>
      <a
        href="https://www.youtube.com/@comunicacionesavancemos"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-800 text-white p-3 rounded-full shadow hover:scale-110 transition-transform"
      >
        <FaYoutube className="text-white"/>
      </a>
    </div>
  );
}
