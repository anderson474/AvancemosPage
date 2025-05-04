import { useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '../../utils/supabase/client'
import Image from 'next/image'


export default function AvancemosVirtual() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!email || !password) {
      setError('Por favor ingrese su correo y contraseña')
      return
    }
  
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
  
    if (signInError || !signInData.user) {
      setError('Correo o contraseña incorrectos')
      return
    }
  
    // Obtener el ID del usuario
    const userId = signInData.user.id
  
    // Consultar la tabla perfiles
    const { data: perfilData, error: perfilError } = await supabase
      .from('perfiles')
      .select('rol')
      .eq('id', userId)
      .single()
  
    if (perfilError || !perfilData) {
      setError('No se pudo obtener el perfil del usuario')
      return
    }
  
    // Redirigir según el rol
    const rol = perfilData.rol
  
    switch (rol) {
      case 'admin':
        router.push('/Dashboard/admin')
        break
      case 'docente':
        router.push('/Dashboard/docente')
        break
      case 'alumno':
        router.push('/Dashboard/alumno')
        break
      default:
        setError('Rol no reconocido')
        break
    }
  }
  




  return (
    <div className="h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/login/FotoCoorporativa.jpeg')" }}>
      <div className="fixed left-125">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 mx-auto mt-20">
      <Image
      src="/logo.ico"
      width={500}
      height={100}
      alt="Picture of the author"
      />
      <h2 className="text-2xl font-bold text-center text-black mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          className="border p-2 rounded mb-4 text-gray-500"
          type="email"
          placeholder="Ingrese su Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 rounded mb-4 text-gray-500"
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-[rgba(45,168,54,1)] text-white py-2 rounded hover:bg-blue-600 transition">Entrar</button>
      </form>
    </div>
      </div>
    </div>
  );
}