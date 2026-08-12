import React from 'react';
import { getHeroData } from '@/lib/hero/local-store';
import AdminHeroForm from './AdminHeroForm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { ADMIN_COOKIE_NAME } from '@/lib/admin-auth';

export default async function AdminHeroPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const { getAdminSecret } = await import('@/lib/admin-auth');
  const secret = getAdminSecret();

  if (!secret || token !== secret) {
    redirect('/admin/login');
  }

  const heroData = await getHeroData();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-black mb-8 text-text-primary">Editar Destaque (Hero)</h1>
      <AdminHeroForm initialData={heroData} />
    </div>
  );
}
