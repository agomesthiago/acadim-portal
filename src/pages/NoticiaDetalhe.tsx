import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft, Loader2, Calendar, AlertCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { fetchNewsById } from '../services/newsService';
import { News } from '../types/news';

export function NoticiaDetalhe() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNewsById(id);
        setPost(data);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar os detalhes da notícia.');
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link 
            to="/noticias" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0066CC] font-bold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para o blog
          </Link>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-[#0066CC]" />
              <p className="font-medium">Carregando notícia...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center text-red-600">
              <AlertCircle className="w-10 h-10 mx-auto mb-3 text-red-500" />
              <h2 className="text-xl font-bold mb-2">Ops! Ocorreu um problema.</h2>
              <p className="text-sm text-red-500">{error}</p>
            </div>
          ) : !post ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0B132B] mb-2">Notícia não encontrada.</h2>
              <p className="text-slate-500">A publicação que você procurou não existe ou foi removida.</p>
            </div>
          ) : (
            <article className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
              {post.image_url && (
                <div className="w-full h-64 sm:h-96 bg-slate-100">
                  <img 
                    src={post.image_url} 
                    alt={post.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                  <Calendar className="w-5 h-5" />
                  {new Date(post.created_at).toLocaleDateString('pt-BR')}
                </div>
                
                <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0B132B] mb-8 leading-tight">
                  {post.title}
                </h1>
                
                <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </div>
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
