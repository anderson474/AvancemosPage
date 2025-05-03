import { useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '../../utils/supabase/client'


export default function AvancemosVirtual() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
  
    // Validación básica antes de enviar a Supabase
    if (!email || !password) {
      setError('Por favor ingrese su correo y contraseña')
      return
    }
  
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
  
    if (error) {
      setError('Correo o contraseña incorrectos')
    } else {
      router.push('/dashboard')
    }
  }
  




  return (
    <div className="h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: "url('/login/FotoCoorporativa.jpg')" }}>
      <div className="fixed top-4 left-4">
      <div className="bg-black p-8 rounded-lg shadow-lg w-80 mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          className="border p-2 rounded mb-4"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 rounded mb-4"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Entrar</button>
      </form>
    </div>
      </div>
    </div>
  );
}