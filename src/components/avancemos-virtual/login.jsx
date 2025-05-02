// components/Login.js
export default function Login() {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <img src="/logo.ico" alt="Logo" className="h-20 w-20 object-contain mx-auto" />
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <form className="flex flex-col">
          <label className="text-gray-600">Usuario</label>
          <input className="border p-2 rounded mb-4 text-gray-500" type="text" placeholder="Ingrese su usuario" />
  
          <label className="text-gray-600">Contraseña</label>
          <input className="border p-2 rounded mb-4 text-gray-500" type="password" placeholder="Ingrese su contraseña" />
  
          <button className="bg-[rgba(45,168,54,1)] text-white py-2 rounded hover:bg-blue-600 transition">
            Entrar
          </button>
        </form>
      </div>
    );
  }
  