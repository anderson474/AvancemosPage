import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function TrabajaConNosotrosForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
    hojaDeVida: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'hojaDeVida') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Preparar el objeto para enviar los datos a EmailJS
    const formDataToSend = {
      nombre: formData.nombre,
      correo: formData.correo,
      telefono: formData.telefono,
      mensaje: formData.mensaje,
    };

    // Enviar el formulario con EmailJS
    emailjs
      .send(
        "service_5gp14v1",  // Reemplaza con tu Service ID
        "template_yo1ax4w",  // Reemplaza con tu Template ID
        formDataToSend,
        "N7GiP_qW7vW2Cy1mR" // Reemplaza con tu Public Key
      )
      .then((response) => {
        console.log('Formulario enviado con éxito', response);
        alert('Formulario enviado con éxito');
      })
      .catch((error) => {
        console.error('Error al enviar el formulario', error);
        alert('Hubo un error al enviar tu solicitud');
      });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-12 lg:px-32">
      <div className="max-w-3xl mx-auto shadow-xl rounded-2xl p-10 border border-blue-100">
        <img src="/logo.ico" alt="Logo" className="h-60 w-60 object-contain text-center mx-auto" />
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center mt-20">Trabaja con Nosotros</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-green-700 font-medium mb-1">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-green-700 font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-green-700 font-medium mb-1">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-green-700 font-medium mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-green-700 font-medium mb-1">Adjuntar hoja de vida</label>
            <input
              type="file"
              name="hojaDeVida"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-xl shadow-md hover:bg-green-700 transition"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
}
