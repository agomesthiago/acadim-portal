import React, { useState } from 'react';
import { Navigate, Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LogOut, LayoutDashboard, FileText, ShieldAlert, Menu, X } from 'lucide-react';
import { AcadimLogo } from '../AcadimLogo';

export function AdminLayout() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 font-medium">
        Carregando painel...
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  const isDashboardActive = location.pathname === '/admin' || location.pathname === '/admin/';
  const isNewsActive = location.pathname.startsWith('/admin/noticias');

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Sidebar Desktop */}
      <aside className="w-64 bg-[#0B132B] text-white flex flex-col hidden md:flex flex-shrink-0">
        <div className="p-6 border-b border-white/10">
          <AcadimLogo light />
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-[#E31B23]" />
            Área Restrita
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            to="/admin" 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
              isDashboardActive 
                ? 'bg-[#0066CC] text-white font-bold shadow-sm' 
                : 'text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>

          <Link 
            to="/admin/noticias" 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
              isNewsActive 
                ? 'bg-[#0066CC] text-white font-bold shadow-sm' 
                : 'text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <FileText className="w-5 h-5" />
            Notícias
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="mb-4 px-4 text-xs text-slate-400 truncate font-mono">
            {session.user.email}
          </div>
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 font-medium hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sair do Painel
          </button>
        </div>
      </aside>

      {/* Header & Menu Mobile */}
      <header className="md:hidden bg-[#0B132B] text-white p-4 flex justify-between items-center z-40 sticky top-0">
        <AcadimLogo light />
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B] text-white border-b border-white/10 p-4 space-y-2 z-30">
          <Link 
            to="/admin" 
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
              isDashboardActive ? 'bg-[#0066CC] text-white' : 'text-slate-400'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link 
            to="/admin/noticias" 
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
              isNewsActive ? 'bg-[#0066CC] text-white' : 'text-slate-400'
            }`}
          >
            <FileText className="w-5 h-5" />
            Notícias
          </Link>
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 font-medium"
          >
            <LogOut className="w-5 h-5" />
            Sair
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen md:h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
