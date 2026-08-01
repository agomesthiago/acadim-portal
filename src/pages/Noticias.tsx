import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft, Loader2, Calendar } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

type News = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
};

export function Noticias() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao buscar notícias:', error);
      } else {
        setNews(data || []);
      }
      setLoading(false);
    }
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B] mb-4">
              Blog & Notícias
            </h1>
            <p className="text-slate-600 text-lg">
              Acompanhe as últimas atualizações, eventos e informativos da ACADIM.
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-[#0066CC]" />
              <p>Carregando as publicações...</p>
            </div>
          ) : news.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-3xl shadow-sm border border-slate-200">
              <p className="text-slate-500 font-medium text-lg">Nenhuma notícia publicada ainda.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {news.map((item) => (
                <Link to={`/noticias/${item.id}`} key={item.id} className="group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-200 overflow-hidden">
                  {item.image_url ? (
                    <div className="h-64 bg-slate-100 overflow-hidden relative">
                      <img 
                        src={item.image_url} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="h-64 bg-gradient-to-br from-[#0066CC]/10 to-[#38bdf8]/20 flex items-center justify-center">
                      <span className="text-[#0066CC] font-bold">ACADIM</span>
                    </div>
                  )}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.created_at).toLocaleDateString('pt-BR')}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B132B] mb-4 group-hover:text-[#0066CC] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-3 mb-6 flex-1">
                      {item.content}
                    </p>
                    <div className="mt-auto font-bold text-[#E31B23] text-sm flex items-center gap-2">
                      Continuar lendo <ArrowLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export function NoticiaDetalhe() {
  const { id } = useParams();
  const [post, setPost] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!id) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Erro ao buscar notícia:', error);
      } else {
        setPost(data);
      }
      setLoading(false);
    }
    fetchPost();
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/noticias" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0066CC] font-bold mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar para o blog
          </Link>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-[#0066CC]" />
            </div>
          ) : !post ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-[#0B132B]">Notícia não encontrada.</h2>
            </div>
          ) : (
            <article className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
              {post.image_url && (
                <div className="w-full h-64 sm:h-96 bg-slate-100">
                  <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
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
