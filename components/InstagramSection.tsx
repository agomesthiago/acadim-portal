// components/InstagramSection.tsx
import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

const InstagramIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);

export const InstagramSection: React.FC = () => {
  // Limita estritamente a NO MÁXIMO 6 postagens editoriais institucionais
  const posts = [
    {
      id: 'post-1',
      title: 'Acolhimento & Orientação às Famílias',
      tag: '#Cidadania',
      desc: 'Atendimento humanizado e orientação contínua para pessoas com doenças neuromusculares.',
      date: 'Recente',
      link: 'https://www.instagram.com/acadimrj/',
    },
    {
      id: 'post-2',
      title: 'Direitos no SUS & Isenção de Impostos',
      tag: '#DireitosSUS',
      desc: 'Orientações práticas sobre BPC/LOAS, órteses, VNI e insumos pela rede pública.',
      date: 'Recente',
      link: 'https://www.instagram.com/acadimrj/',
    },
    {
      id: 'post-3',
      title: 'Simpósios & Encontros Científicos no RJ',
      tag: '#ComunidadeACADIM',
      desc: 'Integração entre médicos especialistas, famílias e pesquisadores em distrofias.',
      date: 'Recente',
      link: 'https://www.instagram.com/acadimrj/',
    },
    {
      id: 'post-4',
      title: 'Atualizações sobre Ensaios Clínicos e Terapias',
      tag: '#Ciência&Saúde',
      desc: 'Acompanhamento dos avanços mundiais em terapia gênica e tratamentos aprovados.',
      date: 'Recente',
      link: 'https://www.instagram.com/acadimrj/',
    },
    {
      id: 'post-5',
      title: 'Atividades do Bazar Solidário da ACADIM',
      tag: '#Sustentabilidade',
      desc: 'Arrecadação de recursos para manutenção de serviços e auxílio a pacientes.',
      date: 'Recente',
      link: 'https://www.instagram.com/acadimrj/',
    },
    {
      id: 'post-6',
      title: 'Campanhas de Conscientização e Inclusão',
      tag: '#Inclusão',
      desc: 'Divulgação dos fundadores Clara e Pedro para combate ao preconceito e capacetismo.',
      date: 'Recente',
      link: 'https://www.instagram.com/acadimrj/',
    },
  ].slice(0, 6);

  return (
    <section
      id="instagram"
      aria-label="Comunidade e Redes Sociais da ACADIM no Instagram"
      className="bg-surface-subtle py-20 border-t border-border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-surface-default text-text-primary rounded-3xl p-8 sm:p-12 border border-border-default shadow-xl relative overflow-hidden">
          
          {/* Efeitos visuais suaves de fundo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Cabeçalho da Seção */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <SectionBadge icon={Sparkles} text="Comunidade & Redes Sociais" variant="red" />

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-text-primary">
                  Siga a <span className="text-brand-red">ACADIM no Instagram</span>
                </h2>

                <p className="text-base text-text-secondary font-medium leading-relaxed">
                  Acompanhe o dia a dia da nossa associação no Rio de Janeiro: relatos de famílias, cobertura de simpósios, dicas de fisioterapia e atualizações de direitos no SUS.
                </p>
              </div>

              <a
                href="https://www.instagram.com/acadimrj/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg min-h-[48px] shrink-0 self-start md:self-auto group"
                aria-label="Abrir perfil oficial da ACADIM no Instagram (@acadimrj)"
              >
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
                <span>@acadimrj no Instagram</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Grid de 6 Postagens Institucionais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-subtle rounded-2xl p-6 border border-border-subtle hover:border-brand-red/40 hover:shadow-md transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand-red bg-brand-red/10 px-2.5 py-0.5 rounded-full">
                        {post.tag}
                      </span>
                      <span className="text-[11px] font-semibold text-text-tertiary">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-text-primary group-hover:text-brand-red transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-text-secondary leading-relaxed font-normal">
                      {post.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-xs font-bold text-brand-blue group-hover:text-brand-red transition-colors">
                    <span>Ver no Instagram</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
