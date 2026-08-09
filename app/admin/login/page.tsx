'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/admin/noticias');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || 'Senha incorreta.');
      }
    } catch {
      setError('Erro ao conectar ao servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <SectionBadge icon={ShieldCheck} text="Acesso Restrito" variant="red" />
          </div>
          <h1 className="text-2xl font-black text-text-primary">
            Painel Editorial ACADIM
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Digite a chave de acesso administrativa para gerenciar matérias e notícias.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-3.5 rounded-xl text-xs font-bold flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              Senha de Acesso
            </label>
            <div className="relative">
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-50 border border-slate-200 p-3.5 pl-10 rounded-xl text-sm font-bold text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <Lock size={16} className="absolute left-3.5 top-4 text-slate-400" aria-hidden="true" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-black text-xs uppercase tracking-wider p-3.5 rounded-xl transition-all shadow-md cursor-pointer"
          >
            <span>{loading ? 'Verificando...' : 'Entrar no Painel'}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </form>

        <div className="text-center text-[11px] text-slate-400">
          <p>Acesso restrito à redação e administração da ACADIM.</p>
        </div>
      </div>
    </div>
  );
}
