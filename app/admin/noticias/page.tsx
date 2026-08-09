import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SectionBadge } from '@/components/SectionBadge';
import { Newspaper, Plus, ShieldCheck } from 'lucide-react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import AdminNewsClient from './AdminNewsClient';
import { newsRepository } from '@/lib/news/news-repository';
import { STATIC_BASE_NEWS } from '@/lib/news/static-news';
import { ADMIN_COOKIE_NAME } from '@/lib/admin-auth';

export const metadata: Metadata = {
  title: 'Painel Administrativo Editorial | ACADIM',
  description: 'Gerenciamento de notícias e publicações institucionais da ACADIM.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminNewsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const { getAdminSecret } = await import('@/lib/admin-auth');
  const secret = getAdminSecret();

  if (!secret || token !== secret) {
    redirect('/admin/login');
  }

  const customRecords = await newsRepository.listAllRecords();

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
      {/* Topo do Painel Admin */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <SectionBadge icon={Newspaper} text="Painel Editorial ACADIM" variant="red" />
          <h1 className="text-3xl font-black text-text-primary">
            Gestão de Notícias e Publicações
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            Cadastre, edite e publique novas matérias institucionais de forma simples e intuitiva.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link
            href="/admin/noticias/nova"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md min-h-[44px] cursor-pointer"
          >
            <Plus size={16} aria-hidden="true" />
            <span>Criar Nova Notícia</span>
          </Link>
        </div>
      </div>

      {/* Tabela Interativa de Notícias */}
      <AdminNewsClient initialRecords={customRecords} baseArticles={STATIC_BASE_NEWS} />

      {/* Aviso de Governança */}
      <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
        <ShieldCheck size={16} className="text-brand-red shrink-0" />
        <span>
          O acervo histórico (4 notícias-base) é mantido permanentemente no código-fonte para segurança e SEO. Notícias criadas no painel entram instantaneamente no site.
        </span>
      </div>
    </div>
  );
}
