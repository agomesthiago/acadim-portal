import React from 'react';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { newsRepository } from '@/lib/news/news-repository';
import AdminNewsForm from '../AdminNewsForm';
import { ADMIN_COOKIE_NAME, getAdminSecret } from '@/lib/admin-auth';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const found = await newsRepository.getRecordById(id);

  return {
    title: found ? `Editar: ${found.title} | Admin ACADIM` : 'Notícia não encontrada',
    robots: { index: false, follow: false },
  };
}

export default async function EditarNoticiaPage({ params }: PageProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const secret = getAdminSecret();

  if (!secret || token !== secret) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const initialData = await newsRepository.getRecordById(id);

  if (!initialData) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <AdminNewsForm isEdit={true} initialData={initialData} />
    </div>
  );
}
