import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'

export default function Logout() {
  const router = useRouter()
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const cerrarSesion = async () => {
      await supabase.auth.signOut()
      router.push('/')
    }

    cerrarSesion()
  }, [router])

  return <p>Cerrando sesión...</p>
}
