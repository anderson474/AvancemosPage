// CursosForm.tsx
import React, { useState } from "react";
import emailjs from "emailjs-com";

interface CursosFormProps {
  curso: string;
  onClose: () => void;
}

const CursosForm: React.FC<CursosFormProps> = ({ curso, onClose }) => {
  const [enviando, setEnviando] = useState(false);
  const [formData, setFormData] = useState({
    cursoSeleccionado: curso,
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    emailjs
      .send(
        "service_5gp14v1",     // Reemplaza con tu Service ID
        "template_yo1ax4w",    // Reemplaza con tu Template ID
        formData,
        "N7GiP_qW7vW2Cy1mR"    // Reemplaza con tu Public Key
      )
      .then(() => {
        setEnviando(false);
        onClose();
        alert("¡Inscripción enviada con éxito!");
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setEnviando(false);
        alert("Hubo un error al enviar el formulario.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative text-[#003366]">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl text-green-600 hover:text-green-800"
        >
          X
        </button>
        <h3 className="text-xl font-semibold mb-4">Formulario de Inscripción</h3>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Nombre*", name: "nombre" },
            { label: "Apellido*", name: "apellido" },
            { label: "Correo*", name: "correo", type: "email" },
            { label: "Celular*", name: "celular" },
          ].map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block mb-1">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>
          ))}
          <input type="hidden" name="cursoSeleccionado" value={curso} />
          <button
            type="submit"
            className="w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar inscripción"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CursosForm;
