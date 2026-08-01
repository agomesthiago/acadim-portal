import { supabase } from '../lib/supabase';
import { News, NewsInput } from '../types/news';

export async function fetchPublishedNews(): Promise<News[]> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Erro ao buscar notícias: ${error.message}`);
  }

  return data || [];
}

export async function fetchAllNews(): Promise<News[]> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Erro ao buscar todas as notícias: ${error.message}`);
  }

  return data || [];
}

export async function fetchNewsById(id: string): Promise<News | null> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(`Erro ao buscar notícia: ${error.message}`);
  }

  return data;
}

export async function uploadNewsImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('news-images')
    .upload(fileName, file);

  if (uploadError) {
    throw new Error(`Erro ao fazer upload da imagem: ${uploadError.message}`);
  }

  const { data: publicUrlData } = supabase.storage
    .from('news-images')
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
}

export async function saveNews(item: Partial<News>, imageFile?: File | null): Promise<void> {
  let finalImageUrl = item.image_url || '';

  if (imageFile) {
    finalImageUrl = await uploadNewsImage(imageFile);
  }

  const payload: NewsInput = {
    title: item.title || '',
    content: item.content || '',
    image_url: finalImageUrl,
    published: item.published ?? true,
  };

  if (!item.id) {
    const { error } = await supabase.from('news').insert([payload]);
    if (error) throw new Error(`Erro ao inserir notícia: ${error.message}`);
  } else {
    const { error } = await supabase.from('news').update(payload).eq('id', item.id);
    if (error) throw new Error(`Erro ao atualizar notícia: ${error.message}`);
  }
}

export async function deleteNews(id: string): Promise<void> {
  const { error } = await supabase.from('news').delete().eq('id', id);
  if (error) {
    throw new Error(`Erro ao excluir notícia: ${error.message}`);
  }
}
