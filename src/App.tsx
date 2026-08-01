import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/admin/Login';
import { AdminLayout } from './components/admin/AdminLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { NewsManager } from './pages/admin/NewsManager';
import { Noticias, NoticiaDetalhe } from './pages/Noticias';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Rotas Públicas */}
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
      
      {/* Rotas Administrativas */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="noticias" element={<NewsManager />} />
      </Route>
    </Routes>
  );
}

export default App;
