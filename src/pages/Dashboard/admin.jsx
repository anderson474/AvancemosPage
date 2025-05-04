// pages/admin.jsx
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '../../../utils/supabase/client'

export default function AdminPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const supabase = createClient(document.cookie)

        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          router.push('/')
        }

        const { data: perfil } = await supabase
          .from('perfiles')
          .select('rol')
          .eq('id', user.id)
          .single()

        if (perfil?.rol !== 'admin') {
          router.push('/')
        }

        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>

  return <h1 className='text-black'>Bienvenido, Admin</h1>
}

