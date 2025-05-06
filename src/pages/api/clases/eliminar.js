import supabase from '@utils/supabase';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).end();

  const { clase_id, video_path } = req.body;

  // Elimina clase
  await supabase.from('clases').delete().eq('id', clase_id);

  // Elimina video del storage
  const { error } = await supabase
    .storage
    .from('videos-clases')
    .remove([video_path]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ success: true });
}
