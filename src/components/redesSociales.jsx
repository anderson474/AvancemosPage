export default function RedesSociales() {
  return (
    <div className="relative w-full max-w-[1500px] mx-auto text-center">
      <img
        src="https://avancemos.edu.co/wp-content/uploads/2025/03/opcion-fondo-entero-02.png"
        alt="Fondo Redes Sociales"
        className="w-4/5 mx-auto"
      />

      {/* Iconos de redes sociales */}
      <div className="absolute top-1/4 left-[10%] flex gap-5 flex-wrap max-md:static max-md:justify-center max-md:mt-4">
        <a
          href="https://www.facebook.com/grupoeducativoavancemos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avancemos.edu.co/wp-content/uploads/2025/03/133590707_Social-Media-Logo-collection-CIRCLE-2023-04.png"
            alt="Facebook"
            className="w-[60px]"
          />
        </a>
        <a
          href="https://www.tiktok.com/@grupo.educativo.a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avancemos.edu.co/wp-content/uploads/2025/03/133590707_Social-Media-Logo-collection-CIRCLE-2023-03.png"
            alt="TikTok"
            className="w-[60px]"
          />
        </a>
        <a
          href="https://www.youtube.com/@comunicacionesavancemos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avancemos.edu.co/wp-content/uploads/2025/03/133590707_Social-Media-Logo-collection-CIRCLE-2023-02.png"
            alt="YouTube"
            className="w-[60px]"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/grupo-educativo-avancemos/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avancemos.edu.co/wp-content/uploads/2025/03/LINKEDIN-02.png"
            alt="LinkedIn"
            className="w-[70px]"
          />
        </a>
      </div>

      {/* Instagram */}
      <div className="absolute top-[10%] right-[20%] text-center max-md:static max-md:my-5">
        <iframe
          src="https://www.instagram.com/grupoeducativoavancemos/embed"
          frameBorder="0"
          scrolling="no"
          className="w-[350px] h-[450px] max-md:w-full max-md:aspect-[4/3]"
        ></iframe>
      </div>

      {/* YouTube */}
      <div className="absolute bottom-[10%] right-[20%] text-center max-md:static max-md:my-5">
        <iframe
          src="https://www.youtube.com/embed/wo0tLR__qJg?si=hA7FRpFYkUGmPBcC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[360px] h-[215px] max-md:w-full max-md:aspect-[4/3]"
        ></iframe>
      </div>
    </div>
  );
}

