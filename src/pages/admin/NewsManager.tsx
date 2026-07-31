import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, X, Save, Image as ImageIcon, Loader2, FileText } from 'lucide-react';

type News = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  published: boolean;
  created_at: string;
};

export function NewsManager() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<Partial<News> | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Erro ao buscar notícias:', error);
    } else {
      setNews(data || []);
    }
    setLoading(false);
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.title || !editingItem?.content) return;
    
    setIsSaving(true);
    console.log('1. Iniciando salvamento...');
    
    try {
      let finalImageUrl = editingItem.image_url || '';

      if (imageFile) {
        console.log('2. Arquivo de imagem detectado, iniciando upload...', imageFile.name);
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('news-images')
          .upload(filePath, imageFile);

        console.log('3. Resultado do upload:', uploadError || 'Sucesso');

        if (uploadError) {
          throw new Error('Erro ao fazer upload da imagem: ' + uploadError.message);
        }

        const { data: publicUrlData } = supabase.storage
          .from('news-images')
          .getPublicUrl(filePath);
          
        finalImageUrl = publicUrlData.publicUrl;
        console.log('4. URL pública da imagem:', finalImageUrl);
      }

      const isNew = !editingItem.id;
      const payload = {
        title: editingItem.title,
        content: editingItem.content,
        image_url: finalImageUrl,
        published: editingItem.published ?? true,
      };

      console.log('5. Preparando payload para o banco:', payload, 'isNew:', isNew);

      if (isNew) {
        console.log('6. Inserindo no banco...');
        const { error } = await supabase.from('news').insert([payload]);
        console.log('7. Resultado do insert:', error || 'Sucesso');
        if (error) throw new Error('Erro ao inserir no banco: ' + error.message);
      } else {
        console.log('6. Atualizando no banco...');
        const { error } = await supabase.from('news').update(payload).eq('id', editingItem.id);
        console.log('7. Resultado do update:', error || 'Sucesso');
        if (error) throw new Error('Erro ao atualizar no banco: ' + error.message);
      }

      console.log('8. Salvamento concluído com sucesso.');
      alert('Notícia salva com sucesso!');
      setEditingItem(null);
      setImageFile(null);
      fetchNews();
    } catch (err: any) {
      console.error('ERRO CAPTURADO no catch:', err);
      alert('Ocorreu um erro ao salvar a notícia: ' + err.message);
    } finally {
      console.log('9. Finalizando (tirando o loading)...');
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja excluir esta notícia?')) return;
    
    try {
      const { error } = await supabase.from('news').delete().eq('id', id);
      if (error) throw error;
      fetchNews();
    } catch (err) {
      console.error('Erro ao excluir notícia:', err);
      alert('Erro ao excluir a notícia.');
    }
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setImageFile(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-display font-black text-[#0B132B]">Gerenciar Notícias</h1>
        
        {!editingItem && (
          <button 
            onClick={() => { setEditingItem({ title: '', content: '', image_url: '', published: true }); setImageFile(null); }}
            className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl transition-colors"
          >
            <Plus className="w-5 h-5" />
            Nova Notícia
          </button>
        )}
      </div>

      {editingItem ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#0B132B]">
              {editingItem.id ? 'Editar Notícia' : 'Criar Nova Notícia'}
            </h2>
            <button 
              onClick={cancelEditing}
              className="text-slate-400 hover:text-slate-600 p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Título</label>
              <input 
                type="text" 
                required
                value={editingItem.title || ''}
                onChange={e => setEditingItem({...editingItem, title: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC] transition-colors"
                placeholder="Ex: Novo mutirão de doação..."
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Imagem de Capa (Opcional)</label>
              <div className="flex flex-col gap-3">
                {editingItem.image_url && !imageFile && (
                  <div className="relative w-48 h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group">
                    <img src={editingItem.image_url} alt="Capa da notícia" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => setEditingItem({...editingItem, image_url: ''})}
                      className="absolute top-2 right-2 p-1.5 bg-white shadow-sm hover:bg-red-50 hover:text-red-600 rounded-full text-slate-500 transition-colors"
                      title="Remover imagem"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                
                <div className="flex items-center">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        setImageFile(e.target.files[0]);
                      }
                    }}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-[#0066CC] hover:file:bg-blue-100 transition-colors cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Conteúdo (Texto)</label>
              <textarea 
                required
                rows={8}
                value={editingItem.content || ''}
                onChange={e => setEditingItem({...editingItem, content: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC] transition-colors resize-y"
                placeholder="Escreva o conteúdo da notícia aqui..."
              />
            </div>

            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="published"
                checked={editingItem.published !== false}
                onChange={e => setEditingItem({...editingItem, published: e.target.checked})}
                className="w-5 h-5 text-[#0066CC] rounded border-slate-300 focus:ring-[#0066CC]"
              />
              <label htmlFor="published" className="text-sm font-bold text-slate-700 cursor-pointer">
                Publicar imediatamente
              </label>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button 
                type="button"
                onClick={cancelEditing}
                className="px-6 py-3 font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors disabled:opacity-70"
              >
                {isSaving ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Salvando...</>
                ) : (
                  <><Save className="w-5 h-5" /> Salvar Notícia</>
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="p-12 flex flex-col items-center justify-center text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mb-4" />
              <p>Carregando notícias...</p>
            </div>
          ) : news.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-slate-300" />
              </div>
              <p className="font-medium text-lg">Nenhuma notícia encontrada.</p>
              <p className="text-sm mt-1">Crie a primeira notícia clicando no botão acima.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="p-4 font-bold border-b border-slate-200">Data</th>
                    <th className="p-4 font-bold border-b border-slate-200">Título</th>
                    <th className="p-4 font-bold border-b border-slate-200">Status</th>
                    <th className="p-4 font-bold border-b border-slate-200 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {news.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-sm text-slate-500 whitespace-nowrap">
                        {new Date(item.created_at).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-[#0B132B] line-clamp-1">{item.title}</p>
                      </td>
                      <td className="p-4">
                        {item.published ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Publicado
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Rascunho
                          </span>
                        )}
                      </td>
                      <td className="p-4 flex items-center justify-end gap-2">
                        <button 
                          onClick={() => { setEditingItem(item); setImageFile(null); }}
                          className="p-2 text-slate-400 hover:text-[#0066CC] hover:bg-blue-50 rounded-lg transition-colors"
                          title="Editar"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Excluir"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
