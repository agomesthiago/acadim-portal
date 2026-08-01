import React from 'react';
import { Navigate, Outlet, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LogOut, LayoutDashboard, FileText, Settings, ShieldAlert } from 'lucide-react';
import { AcadimLogo } from '../AcadimLogo';

// Placeholder for auth state - you'd normally use a context or store here
// We'll manage it locally in a real app, but for now we assume they are authenticated
// if they reach this layout, or we check session on mount.

export function AdminLayout() {
  const [session, setSession] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

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
    return <div className="min-h-screen flex items-center justify-center bg-slate-50">Carregando painel...</div>;
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B132B] text-white flex flex-col hidden md:flex">
        <div className="p-6 border-b border-white/10">
          <AcadimLogo light />
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-[#E31B23]" />
            Área Restrita
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link to="/admin/noticias" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 font-medium hover:bg-white/10 hover:text-white transition-colors">
            <FileText className="w-5 h-5" />
            Notícias
          </Link>
          {/* Outros links podem entrar aqui */}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="mb-4 px-4 text-xs text-slate-400 truncate">
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-[#0B132B] text-white p-4 flex justify-between items-center">
          <AcadimLogo light />
          <button onClick={handleSignOut} className="text-red-400">
            <LogOut className="w-6 h-6" />
          </button>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
