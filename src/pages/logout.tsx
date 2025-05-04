import { useEffect } from 'react'
import { useRouter } from 'next/router'
import supabase from "../../utils/supabase"
export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    const cerrarSesion = async () => {
      await supabase.auth.signOut()
      router.push('/')
    }

    cerrarSesion()
  }, [router])

  return <p>Cerrando sesión...</p>
}
