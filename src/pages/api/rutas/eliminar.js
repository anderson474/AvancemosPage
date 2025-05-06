import supabase from '@utils/supabase';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).end();

  const { ruta_id } = req.body;

  // Elimina clases asociadas
  await supabase.from('clases').delete().eq('ruta_id', ruta_id);

  // Luego elimina la ruta
  const { data, error } = await supabase
    .from('rutas')
    .delete()
    .eq('ruta_id', ruta_id);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ data });
}
