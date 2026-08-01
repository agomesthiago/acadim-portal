import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft, Loader2, Calendar, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchPublishedNews } from '../services/newsService';
import { News } from '../types/news';

export function Noticias() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPublishedNews();
        setNews(data);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar notícias. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }
    loadNews();
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
              <p className="font-medium">Carregando as publicações...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center text-red-600">
              <AlertCircle className="w-10 h-10 mx-auto mb-3 text-red-500" />
              <h2 className="text-xl font-bold mb-2">Não foi possível carregar as notícias</h2>
              <p className="text-sm text-red-500 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors"
              >
                Tentar novamente
              </button>
            </div>
          ) : news.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-3xl shadow-sm border border-slate-200">
              <p className="text-slate-500 font-medium text-lg">Nenhuma notícia publicada ainda.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {news.map((item) => (
                <Link 
                  to={`/noticias/${item.id}`} 
                  key={item.id} 
                  className="group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-200 overflow-hidden"
                >
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
