import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { newsRepository } from '@/lib/news/news-repository';
import AdminNewsForm from '../AdminNewsForm';

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
