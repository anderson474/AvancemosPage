import { GetServerSideProps } from 'next'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { req } = context

  const rawAuthCookie = req.cookies['sb-hwqfmgshfhnatwmyhilh-auth-token']

  //console.log('📥 getServerSideProps ejecutado')
  //console.log('🧪 Cookies:', req.cookies)
  //console.log('🍪 Raw auth cookie:', rawAuthCookie)

  if (!rawAuthCookie) {
    //console.log('🚫 No se encontró cookie de sesión')
    return {
      redirect: { destination: '/avancemos-virtual', permanent: false },
    }
  }

  // Decodificar el base64
  const decoded = JSON.parse(
    Buffer.from(rawAuthCookie.split('base64-')[1], 'base64').toString('utf-8')
  )

  const access_token = decoded.access_token

  //console.log('🔑 Access token decodificado:', access_token)

  if (!access_token) {
    //console.log('🚫 No hay token decodificado. Redirigiendo.')
    return {
      redirect: { destination: '/avancemos-virtual', permanent: false },
    }
  }

  const { data: { user }, error } = await supabase.auth.getUser(access_token)

  //console.log('👤 Usuario:', user)
  //console.log('❌ Error:', error)

  if (!user || error) {
    return {
      redirect: { destination: '/avancemos-virtual', permanent: false },
    }
  }

  return {
    props: {
      email: user.email,
    },
  }
}

export default function Dashboard({ email }: { email: string }) {
  return (
    <div className="text-center mt-20">
      <h1 className="bg-black text-2xl font-bold">¡Hola, {email}!</h1>
      <Link href="/logout" className="text-blue-600 underline mt-4 block">
        Cerrar sesión
      </Link>
    </div>
  )
}

