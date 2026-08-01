import React, { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2, X, Save, Loader2, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { fetchAllNews, saveNews, deleteNews } from '../../services/newsService';
import { News } from '../../types/news';

export function NewsManager() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<Partial<News> | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  async function loadNews() {
    setLoading(true);
    try {
      const data = await fetchAllNews();
      setNews(data);
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message || 'Erro ao carregar notícias.' });
    } finally {
      setLoading(false);
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.title || !editingItem?.content) return;
    
    setIsSaving(true);
    setFeedback(null);
    
    try {
      await saveNews(editingItem, imageFile);
      setFeedback({ type: 'success', message: 'Notícia salva com sucesso!' });
      setEditingItem(null);
      setImageFile(null);
      loadNews();
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message || 'Erro ao salvar a notícia.' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteConfirm = async (id: string) => {
    setDeletingId(id);
  };

  const executeDelete = async () => {
    if (!deletingId) return;
    try {
      await deleteNews(deletingId);
      setFeedback({ type: 'success', message: 'Notícia excluída com sucesso!' });
      setDeletingId(null);
      loadNews();
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message || 'Erro ao excluir a notícia.' });
      setDeletingId(null);
    }
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setImageFile(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-black text-[#0B132B]">Gerenciar Notícias</h1>
          <p className="text-slate-500 text-sm mt-1">Crie, edite e gerencie as publicações do blog da ACADIM.</p>
        </div>
        
        {!editingItem && (
          <button 
            onClick={() => { setEditingItem({ title: '', content: '', image_url: '', published: true }); setImageFile(null); setFeedback(null); }}
            className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            <Plus className="w-5 h-5" />
            Nova Notícia
          </button>
        )}
      </div>

      {feedback && (
        <div className={`p-4 rounded-xl flex items-start gap-3 border text-sm font-medium ${
          feedback.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'
        }`}>
          {feedback.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          )}
          <span className="flex-1">{feedback.message}</span>
          <button onClick={() => setFeedback(null)} className="text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {deletingId && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-100 space-y-4">
            <h3 className="text-xl font-bold text-[#0B132B]">Excluir Notícia?</h3>
            <p className="text-slate-600 text-sm">Tem certeza que deseja excluir esta notícia? Esta ação não poderá ser desfeita.</p>
            <div className="flex justify-end gap-3 pt-2">
              <button 
                onClick={() => setDeletingId(null)}
                className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={executeDelete}
                className="px-4 py-2 text-sm font-bold bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

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
              <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#0066CC]" />
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
                          onClick={() => { setEditingItem(item); setImageFile(null); setFeedback(null); }}
                          className="p-2 text-slate-400 hover:text-[#0066CC] hover:bg-blue-50 rounded-lg transition-colors"
                          title="Editar"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteConfirm(item.id)}
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
