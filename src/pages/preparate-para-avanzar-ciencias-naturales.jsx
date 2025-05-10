import Layout from '@/components/layout';

export default function Ingles() {
  const pdfPath = "/naturales/ANALIZA-CIENCIAS-NATURALES.pdf";
  const pdfWithZoom = `${pdfPath}#zoom=75`;
  const pdf1Path = "/naturales/APRENDE-CIENCIAS-NATURALES.pdf";
  const pdf1WithZoom = `${pdf1Path}#zoom=75`;
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