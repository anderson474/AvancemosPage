import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre, descripcion, ruta_asignada_id, video_url } = req.body;

  const { data, error } = await supabase
    .from('clases')
    .insert([{ nombre, descripcion, ruta_asignada_id, video_url }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ message: 'Clase guardada', data });
}
