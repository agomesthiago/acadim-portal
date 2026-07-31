import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { FileText, Users, Activity } from 'lucide-react';

export function Dashboard() {
  const [stats, setStats] = useState({ newsCount: 0 });

  useEffect(() => {
    async function fetchStats() {
      // Just a simple count query for news
      const { count, error } = await supabase
        .from('news')
        .select('*', { count: 'exact', head: true });
      
      if (!error && count !== null) {
        setStats({ newsCount: count });
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-black text-[#0B132B]">Dashboard</h1>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="w-12 h-12 bg-blue-50 text-[#0066CC] rounded-xl flex items-center justify-center mb-4">
            <FileText className="w-6 h-6" />
          </div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Notícias Publicadas</p>
          <p className="text-3xl font-black text-[#0B132B]">{stats.newsCount}</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 opacity-60">
          <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4">
            <Users className="w-6 h-6" />
          </div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Administradores</p>
          <p className="text-3xl font-black text-[#0B132B]">-</p>
          <p className="text-xs text-slate-400 mt-2">Em breve</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 opacity-60">
          <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4">
            <Activity className="w-6 h-6" />
          </div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Visitas</p>
          <p className="text-3xl font-black text-[#0B132B]">-</p>
          <p className="text-xs text-slate-400 mt-2">Integração Analytics futura</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <h3 className="font-bold text-[#0B132B] mb-2">Bem-vindo ao Painel ACADIM!</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Este é o espaço reservado para o gerenciamento de conteúdo do site. Atualmente, você pode acessar a aba <strong>Notícias</strong> no menu lateral para adicionar, editar ou remover as publicações que aparecem na página inicial.
        </p>
      </div>
    </div>
  );
}
