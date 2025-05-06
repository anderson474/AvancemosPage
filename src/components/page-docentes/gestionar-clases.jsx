import { useState } from 'react';
import { Video, FileText, User, Trash2, Layers } from 'lucide-react';

export default function GestionClases() {
  const [video, setVideo] = useState(null);
  const [nombreClase, setNombreClase] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [creadaPor, setCreadaPor] = useState('');
  const [rutaId, setRutaId] = useState('');
  const [claseIdEliminar, setClaseIdEliminar] = useState('');
  const [videoPathEliminar, setVideoPathEliminar] = useState('');

  const subirClase = async () => {
    const formData = new FormData();
    formData.append('video', video);
    formData.append('nombre_clase', nombreClase);
    formData.append('descripcion', descripcion);
    formData.append('creada_por', creadaPor);
    formData.append('ruta_id', rutaId);

    const res = await fetch('/api/clases/subir', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  };

  const eliminarClase = async () => {
    const res = await fetch('/api/clases/eliminar', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clase_id: claseIdEliminar, video_path: videoPathEliminar }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-80 bg-white p-6 shadow-xl flex flex-col overflow-y-auto">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Gestión de Clases</h2>

        {/* Subir Clase */}
        <section className="mb-10">
          <h3 className="text-lg text-green-600 font-semibold mb-4">Subir Clase</h3>
          <div className="space-y-3">
            <InputWithIcon
              Icon={Video}
              type="file"
              accept="video/*"
              onChange={e => setVideo(e.target.files[0])}
            />
            <InputWithIcon
              Icon={FileText}
              placeholder="Nombre de clase"
              value={nombreClase}
              onChange={e => setNombreClase(e.target.value)}
            />
            <InputWithIcon
              Icon={FileText}
              placeholder="Descripción"
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
            />
            <InputWithIcon
              Icon={User}
              placeholder="ID del creador"
              value={creadaPor}
              onChange={e => setCreadaPor(e.target.value)}
            />
            <InputWithIcon
              Icon={Layers}
              placeholder="ID de la ruta"
              value={rutaId}
              onChange={e => setRutaId(e.target.value)}
            />
            <button
              onClick={subirClase}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Subir Clase
            </button>
          </div>
        </section>

        {/* Eliminar Clase */}
        <section>
          <h3 className="text-lg text-red-600 font-semibold mb-4">Eliminar Clase</h3>
          <div className="space-y-3">
            <InputWithIcon
              Icon={Trash2}
              placeholder="ID de clase"
              value={claseIdEliminar}
              onChange={e => setClaseIdEliminar(e.target.value)}
              ringColor="red"
              iconColor="text-red-600"
            />
            <InputWithIcon
              Icon={Video}
              placeholder="Ruta del video"
              value={videoPathEliminar}
              onChange={e => setVideoPathEliminar(e.target.value)}
              ringColor="red"
              iconColor="text-red-600"
            />
            <button
              onClick={eliminarClase}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Eliminar Clase
            </button>
          </div>
        </section>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-6">
        <h1 className="text-gray-700 text-xl">Aquí puede ir el contenido principal</h1>
      </main>
    </div>
  );
}

function InputWithIcon({ Icon, ringColor = 'green', iconColor = 'text-green-600', ...props }) {
  return (
    <label className="flex items-center space-x-3">
      <Icon className={`${iconColor} w-5 h-5`} />
      {props.type === 'file' ? (
        <input
          {...props}
          className="text-sm file:border file:rounded file:px-2 file:py-1 file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
        />
      ) : (
        <input
          {...props}
          className={`bg-gray-500 w-full border p-1 rounded focus:outline-none focus:ring-2 focus:ring-${ringColor}-400`}
        />
      )}
    </label>
  );
}
