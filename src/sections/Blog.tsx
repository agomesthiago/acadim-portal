import { BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { BlogPost } from '../lib/data';

export function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0066CC] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <BookOpen className="w-4 h-4" />
                Informação que acolhe
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a] mt-3 leading-tight">
                Nosso <span className="text-[#0066CC]">Blog</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                <p>
                  <strong>Fique por dentro.</strong> Informação de qualidade faz
                  diferença no cuidado e na defesa de direitos.
                </p>
                <p>
                  No blog da ACADIM você encontra conteúdos educativos sobre
                  distrofia muscular, direitos das pessoas com deficiência,
                  eventos, campanhas e ações da associação.
                </p>
                <p className="font-semibold text-[#0066CC]">
                  Informação compartilhada fortalece vidas.
                </p>
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#0066CC] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-sm hover:bg-[#004499] transition-colors"
                  >
                    Acesse o Blog <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={0.1 + i * 0.08}>
                <a
                  href={post.href}
                  className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-extrabold uppercase bg-blue-50 text-[#0066CC] px-2.5 py-0.5 rounded-md">
                      {post.tag}
                    </span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display font-bold text-lg text-[#0f172a] group-hover:text-[#0066CC] transition-colors">
                      {post.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-[#0066CC] group-hover:text-white transition-colors flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
