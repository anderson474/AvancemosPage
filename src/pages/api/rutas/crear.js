import supabase from '@utils/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { titulo, descripcion, creado_por } = req.body;

  const { data, error } = await supabase
    .from('rutas')
    .insert([{ titulo, descripcion, creado_por }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ data });
}
