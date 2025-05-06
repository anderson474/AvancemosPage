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
      .send(
        "service_5gp14v1",    // Reemplaza
        "template_yo1ax4w",   // Reemplaza
        formData,
        "N7GiP_qW7vW2Cy1mR"     // Reemplaza
      )
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
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestros Cursos</h2>

      {cursos.map((curso) => (
        <div key={curso.nombre} style={styles.courseBox}>
          <div style={styles.courseHeader} onClick={() => toggleCurso(curso.nombre)}>
            <strong>{curso.nombre}</strong>
            <span>{cursosAbiertos[curso.nombre] ? "▲" : "▼"}</span>
          </div>
          {cursosAbiertos[curso.nombre] && (
            <>
              <ul style={styles.contentList}>
                {curso.contenidos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div style={styles.buttonWrapper}>
                <button
                  style={styles.inscribirmeButton}
                  onClick={() => abrirFormulario(curso.nombre)}
                >
                  Inscribirme
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Modal del Formulario */}
      {formVisible && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeButton} onClick={cerrarFormulario}>X</button>
            <h2>Formulario de Inscripción</h2>
            <p style={styles.note}>
              * Si la persona que paga es quien recibe el curso, no debe llenar los datos de estudiante.
            </p>
            <form onSubmit={handleSubmit} style={styles.form}>
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
                <div key={field.name} style={styles.inputGroup}>
                  <label style={styles.label}>{field.label}</label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      style={styles.input}
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
                      style={styles.input}
                      required={field.label.includes("*")}
                    />
                  )}
                </div>
              ))}
              <button type="submit" style={styles.button} disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar inscripción"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#ffffff",
    color: "#003366",
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#003366",
  },
  courseBox: {
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
  },
  courseHeader: {
    backgroundColor: "#007acc",
    color: "#fff",
    padding: "12px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
  },
  contentList: {
    padding: "10px 20px",
    margin: 0,
    backgroundColor: "#f4faff",
    listStyleType: "disc",
  },
  buttonWrapper: {
    padding: "10px 20px",
  },
  inscribirmeButton: {
    padding: "10px 16px",
    backgroundColor: "#007acc",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "600px",
    position: "relative",
    overflowY: "auto",
    maxHeight: "90vh",
    color: "#003366",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "20px",
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#007acc",
  },
  note: {
    backgroundColor: "#e0f0ff",
    padding: "10px",
    borderLeft: "4px solid #007acc",
    marginBottom: "20px",
  },
  form: {
    marginTop: "10px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007acc",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default CursosForm;


