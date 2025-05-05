import Image from 'next/image'
import Link from 'next/link';
import { FaLanguage, FaClipboard, FaChalkboardTeacher, FaUserGraduate, FaAccessibleIcon, FaSignOutAlt } from 'react-icons/fa';




export default function Slidebar(){
    return(
      <div className="h-full w-50 bg-white flex flex-col border-r border-gray-300 border-2">
      <div className="p-6 text-2xl font-bold">
        <Image
              src="/logo.ico"
              width={500}
              height={100}
              alt="Picture of the author"
              />
      </div>
      <nav className="flex-1 p-4 space-y-2">
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-blue-50" style={{ color: 'rgb(45, 168, 54)' }}>
        <FaLanguage className="mr-2" /> Bilinguismo
      </a>
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-blue-50" style={{ color: 'rgb(45, 168, 54)' }}>
        <FaClipboard className="mr-2" /> Pre-saber
      </a>
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-blue-50" style={{ color: 'rgb(45, 168, 54)' }}>
        <FaChalkboardTeacher className="mr-2" /> Evaluacion
      </a>
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-blue-50" style={{ color: 'rgb(45, 168, 54)' }}>
        <FaUserGraduate className="mr-2" /> Formacion continua
      </a>
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-blue-50" style={{ color: 'rgb(45, 168, 54)' }}>
        <FaAccessibleIcon className="mr-2" /> Educacion inclusiva
      </a>
      <Link href="/" className="flex items-center pt-20 px-4 rounded hover:bg-blue-50" style={{ color: 'rgb(45, 168, 54)' }}>
        <FaSignOutAlt className="mr-2" /> Cerrar sesión
      </Link>
    </nav>
    </div>
    );
}