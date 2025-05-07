import React, { useState } from "react";
import emailjs from "emailjs-com";

const CursosForm = () => {
  const [formData, setFormData] = useState({
    cursoSeleccionado: "",
    nombre: "",
    apellido: "",
    rut: "",
    tipoPersona: "",
    correo: "",
    celular: "",
    cedula: "",
    tipoDocumento: "",
    nombreEstudiante: "",
    documentoEstudiante: "",
    tipoDocumentoEstudiante: "",
  });

  const [cursosAbiertos, setCursosAbiertos] = useState({});
  const [formVisible, setFormVisible] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const cursos = [
    {
      nombre: "Curso de Seguridad Electrónica",
      contenidos: [
        "Introducción a CCTV",
        "Instalación de Cámaras",
        "Configuración de NVR",
        "Tipos de cableado",
      ],
    },
    {
      nombre: "Curso de Alarmas",
      contenidos: [
        "Sensores de Movimiento",
        "Paneles de Control",
        "Automatización",
        "Notificaciones móviles",
      ],
    },
  ];

  const toggleCurso = (nombre) => {
    setCursosAbiertos((prev) => ({
      ...prev,
      [nombre]: !prev[nombre],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    emailjs
      .send("service_5gp14v1", "template_yo1ax4w", formData, "N7GiP_qW7vW2Cy1mR")
      .then(() => {
        setEnviado(true);
        setEnviando(false);
        setFormVisible(false);
      })
      .catch((error) => {
        console.error("Error al enviar", error);
        alert("Error al enviar el formulario");
        setEnviando(false);
      });
  };

  const abrirFormulario = (curso) => {
    setFormData({ ...formData, cursoSeleccionado: curso });
    setFormVisible(true);
  };

  const cerrarFormulario = () => {
    setFormVisible(false);
  };

  return (
    <div className="p-10 bg-white text-[#003366] font-sans max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6 text-[#003366]">Nuestros Cursos</h2>

      {cursos.map((curso) => (
        <div key={curso.nombre} className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
          <div
            className="bg-[#007acc] text-white px-4 py-3 cursor-pointer flex justify-between"
            onClick={() => toggleCurso(curso.nombre)}
          >
            <strong>{curso.nombre}</strong>
            <span>{cursosAbiertos[curso.nombre] ? "▲" : "▼"}</span>
          </div>
          {cursosAbiertos[curso.nombre] && (
            <>
              <ul className="bg-[#f4faff] list-disc px-8 py-3">
                {curso.contenidos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="px-6 py-4">
                <button
                  className="px-4 py-2 bg-[#007acc] text-white font-bold rounded hover:bg-[#005f99]"
                  onClick={() => abrirFormulario(curso.nombre)}
                >
                  Inscribirme
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-xl relative overflow-y-auto max-h-[90vh] text-[#003366]">
            <button
              className="absolute top-2 right-4 text-xl text-[#007acc] hover:text-[#005f99]"
              onClick={cerrarFormulario}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">Formulario de Inscripción</h2>
            <p className="bg-[#e0f0ff] border-l-4 border-[#007acc] p-3 mb-6 text-sm">
              * Si la persona que paga es quien recibe el curso, no debe llenar los datos de estudiante.
            </p>
            <form onSubmit={handleSubmit}>
              {[
                {
                  label: "Curso a inscribirse*",
                  name: "cursoSeleccionado",
                  type: "select",
                  options: cursos.map((c) => c.nombre),
                },
                { label: "Nombre*", name: "nombre" },
                { label: "Apellido*", name: "apellido" },
                { label: "RUT", name: "rut" },
                {
                  label: "Tipo de Persona*",
                  name: "tipoPersona",
                  type: "select",
                  options: ["Natural", "Jurídica"],
                },
                { label: "Correo*", name: "correo", type: "email" },
                { label: "Celular*", name: "celular" },
                { label: "Cédula*", name: "cedula" },
                {
                  label: "Tipo de Documento*",
                  name: "tipoDocumento",
                  type: "select",
                  options: ["Cédula", "Pasaporte", "Otro"],
                },
                { label: "Nombre del Estudiante", name: "nombreEstudiante" },
                { label: "Documento del Estudiante", name: "documentoEstudiante" },
                {
                  label: "Tipo de Documento del Estudiante",
                  name: "tipoDocumentoEstudiante",
                  type: "select",
                  options: ["Cédula", "Tarjeta de identidad", "Otro"],
                },
              ].map((field) => (
                <div key={field.name} className="mb-4">
                  <label className="block mb-1 font-semibold">{field.label}</label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-50"
                      required={field.label.includes("*")}
                    >
                      <option value="">Seleccione...</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-50"
                      required={field.label.includes("*")}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="mt-4 px-5 py-3 bg-[#007acc] text-white font-bold rounded hover:bg-[#005f99]"
                disabled={enviando}
              >
                {enviando ? "Enviando..." : "Enviar inscripción"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CursosForm;



