import Layout from '@/components/layout';
import { BookOpen, Atom, Globe, Brain, Calculator } from "lucide-react";
import Link from 'next/link';

export default function Ejercitacion() {
    return(
        <>
            <Layout>
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-white px-20 mt-80">
                {/* GIF de educación */}
                <img 
                    src="/educationQR/Education.gif" 
                    alt="GIF educativo" 
                    className="w-80 h-60 object-contain bg-black"
                />

                {/* Botones de materias */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-1/4 max-w-4xl">
                    <SubjectCard icon={<Calculator size={48} className='hover:text-white' />} label="Matemáticas" path='matematicas' />
                    <SubjectCard icon={<BookOpen size={48} className='hover:text-white' />} label="Lectura Crítica" path='lectura-critica' />
                    <SubjectCard icon={<Atom size={48} className='hover:text-white' />} label="Ciencias Naturales" path='preparate-para-avanzar-ciencias-naturales' />
                    <SubjectCard icon={<Globe size={48} className='hover:text-white' />} label="Ciencias Sociales" path='ciencias-sociales' />
                    <SubjectCard icon={<Brain size={48} className='hover:text-white' />} label="Inglés" path='ingles' />
                </div>
                </div>
            </Layout>
        </>
    );
}

function SubjectCard({ icon, label, path }) {
  return (
    <Link href={`/${path}`} className="flex flex-col items-center justify-center w-full h-1/2 hover:bg-blue-700 bg-blue-200 rounded-xl">
        {icon}
        <span className="mt-4 hover:text-white">{label}</span>
    </Link>
  );
}