// pages/matematicas.js
import Layout from '@/components/layout';

export default function Ingles() {
  const pdfPath = "/sociales/ANALIZA-CIENCIAS-SOCIALES.pdf";
  const pdfWithZoom = `${pdfPath}#zoom=75`;
  const pdf1Path = "/sociales/APRENDE-CIENCIAS-SOCIALES.pdf";
  const pdf1WithZoom = `${pdf1Path}#zoom=75`;
  //public\sociales\ANALIZA-CIENCIAS-SOCIALES.pdf
  return (
  <Layout>
    <div className="min-h-screen bg-white mt-70 p-8">

      {/* Grid de visores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <iframe
          src={pdfWithZoom}
          className="w-full h-[800px] rounded-xl shadow-lg border"
        >
          Este navegador no soporta PDFs. Por favor descarga el archivo.
        </iframe>
        <iframe
          src={pdf1WithZoom}
          className="w-full h-[800px] rounded-xl shadow-lg border"
        >
          Este navegador no soporta PDFs. Por favor descarga el archivo.
        </iframe>
      </div>
    </div>
  </Layout>
);
}