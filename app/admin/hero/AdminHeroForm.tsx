'use client';

import React, { useState, useRef } from 'react';
import { HeroData } from '@/lib/hero/local-store';
import { useRouter } from 'next/navigation';
import { Save, Image as ImageIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface AdminHeroFormProps {
  initialData: HeroData;
}

export default function AdminHeroForm({ initialData }: AdminHeroFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<HeroData>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/admin/hero', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Falha ao salvar');
      }

      setSuccessMsg('Destaque (Hero) salvo com sucesso!');
      router.refresh();
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Erro ao salvar destaque.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setErrorMsg('');
    const form = new FormData();
    form.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: form,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Falha no upload');
      }

      const data = await res.json();
      setFormData((prev) => ({ ...prev, bgImage: data.url }));
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Erro ao fazer upload da imagem.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const update = (field: keyof HeroData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">

      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs font-bold flex items-center gap-2">
          <CheckCircle2 size={16} />
          <span>{successMsg}</span>
        </div>
      )}
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl text-xs font-bold flex items-center gap-2">
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">Pill / Tag Superior</label>
        <input
          type="text"
          value={formData.tag}
          onChange={(e) => update('tag', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">Título Principal</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => update('title', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">Subtítulo / Texto de Apoio</label>
        <textarea
          value={formData.subtitle}
          onChange={(e) => update('subtitle', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm min-h-[100px]"
          required
        />
      </div>

      {/* CTAs */}
      <fieldset className="border border-slate-200 rounded-xl p-6 space-y-4">
        <legend className="text-xs font-black uppercase tracking-wider text-slate-700 px-2">CTA 1 (Botão Principal)</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Texto do Botão</label>
            <input
              type="text"
              value={formData.cta1Text}
              onChange={(e) => update('cta1Text', e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"
              placeholder="Ex: COMO DOAR (PIX)"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Ação / Destino</label>
            <input
              type="text"
              value={formData.cta1Action}
              onChange={(e) => update('cta1Action', e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"
              placeholder='"pix" para abrir modal, ou URL'
            />
            <p className="text-[10px] text-slate-400 mt-1">Use "pix" para abrir o modal de doação, ou uma URL para link externo/interno.</p>
          </div>
        </div>
      </fieldset>

      <fieldset className="border border-slate-200 rounded-xl p-6 space-y-4">
        <legend className="text-xs font-black uppercase tracking-wider text-slate-700 px-2">CTA 2 (Botão Secundário)</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Texto do Botão</label>
            <input
              type="text"
              value={formData.cta2Text}
              onChange={(e) => update('cta2Text', e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"
              placeholder="Ex: CADASTRE-SE"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Ação / Destino</label>
            <input
              type="text"
              value={formData.cta2Action}
              onChange={(e) => update('cta2Action', e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"
              placeholder="URL do link"
            />
          </div>
        </div>
      </fieldset>

      {/* Imagem de Fundo */}
      <div className="space-y-3">
        <label className="block text-xs font-black uppercase tracking-wider text-slate-700">Imagem de Fundo</label>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            value={formData.bgImage}
            onChange={(e) => update('bgImage', e.target.value)}
            className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"
            placeholder="/assets/hero-bg.jpg"
            required
          />
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg text-sm font-bold text-slate-700 transition-colors shrink-0"
          >
            {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
            <span>{isUploading ? 'Enviando...' : 'Upload'}</span>
          </button>
        </div>

        {formData.bgImage && (
          <div className="relative w-full h-48 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={formData.bgImage} alt="Preview" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">Texto Alternativo da Imagem (Acessibilidade)</label>
        <input
          type="text"
          value={formData.bgAlt}
          onChange={(e) => update('bgAlt', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
          required
        />
      </div>

      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-red hover:bg-brand-red-hover text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md disabled:opacity-50 min-h-[44px]"
        >
          <Save size={16} />
          <span>{isLoading ? 'Salvando...' : 'Salvar Alterações'}</span>
        </button>
      </div>
    </form>
  );
}
