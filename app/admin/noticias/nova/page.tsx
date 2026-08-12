import React from 'react';
import { Metadata } from 'next';
import AdminNewsForm from '../AdminNewsForm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { ADMIN_COOKIE_NAME, getAdminSecret } from '@/lib/admin-auth';

export const metadata: Metadata = {
  title: 'Criar Nova Notícia | Painel Admin ACADIM',
  description: 'Cadastrar nova publicação editorial no portal ACADIM.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NovaNoticiaPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const secret = getAdminSecret();

  if (!secret || token !== secret) {
    redirect('/admin/login');
  }

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <AdminNewsForm isEdit={false} />
    </div>
  );
}
