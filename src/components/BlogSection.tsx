import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Reveal, SCALE_SPRING } from './Animations';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

export function BlogSection() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRecentNews() {
      const { data, error } = await supabase
        .from('news')
        .select('id, title, content, image_url, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (!error && data) {
        setPosts(data);
      }
    }
    fetchRecentNews();
  }, []);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <Reveal>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B]">
              Últimas Notícias<br/>
              <span className="text-[#0066CC]">&amp; Informações</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link 
              to="/noticias"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0B132B] font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Ver todo o blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <div className="col-span-3 text-center py-12 text-slate-500 font-medium">
              Ainda não há notícias publicadas.
            </div>
          ) : (
            posts.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.1}>
                <Link to={`/noticias/${post.id}`}>
                  <motion.article 
                    whileHover={{ y: -8 }}
                    transition={SCALE_SPRING}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      {post.image_url ? (
                        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <span className="text-[#0066CC] font-bold z-0">ACADIM</span>
                      )}
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="flex items-center gap-1 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.created_at).toLocaleDateString('pt-BR')}
                      </span>
                      <h3 className="font-bold text-xl text-[#0B132B] mb-3 leading-tight group-hover:text-[#0066CC] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                        {post.content}
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-[#E31B23] font-bold text-sm">
                        Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
