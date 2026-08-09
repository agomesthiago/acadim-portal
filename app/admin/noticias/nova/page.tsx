import React from 'react';
import { Metadata } from 'next';
import AdminNewsForm from '../AdminNewsForm';

export const metadata: Metadata = {
  title: 'Criar Nova Notícia | Painel Admin ACADIM',
  description: 'Cadastrar nova publicação editorial no portal ACADIM.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NovaNoticiaPage() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <AdminNewsForm isEdit={false} />
    </div>
  );
}
