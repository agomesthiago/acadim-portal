"use client";

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { visit } from 'unist-util-visit';
import { Image as ImageIcon, Loader2, Video } from 'lucide-react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

function rehypeFilterIframes() {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      if (node.tagName === 'iframe') {
        const src = node.properties?.src || '';
        if (typeof src === 'string') {
          if (!src.includes('youtube.com/') && !src.includes('youtu.be/')) {
            node.tagName = 'div';
            node.properties = {};
            node.children = [{ type: 'text', value: '[Iframe bloqueado: apenas YouTube permitido]' }];
          }
        }
      }
    });
  };
}

const sanitizeOptions = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), 'iframe'],
  attributes: {
    ...defaultSchema.attributes,
    iframe: ['src', 'width', 'height', 'title', 'allow', 'allowFullScreen', 'frameBorder'],
  },
};

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
}

export default function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!res.ok) throw new Error('Falha no upload');
      
      const data = await res.json();
      
      const imageMarkdown = `\n![${file.name}](${data.url})\n`;
      onChange(value + imageMarkdown);
      
    } catch (err) {
      console.error(err);
      alert('Erro ao fazer upload da imagem.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleYoutube = () => {
    const url = window.prompt('Cole o link do vídeo do YouTube (ex: https://youtube.com/watch?v=... ou https://youtu.be/...):');
    if (!url) return;

    let videoId = '';
    
    // Extract video ID from different YouTube URL formats
    try {
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      } else if (url.includes('youtube.com/watch')) {
        const urlObj = new URL(url);
        videoId = urlObj.searchParams.get('v') || '';
      } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1]?.split('?')[0];
      }
      
      if (!videoId) {
        alert('URL do YouTube inválida ou não reconhecida.');
        return;
      }
      
      const iframeMarkdown = `\n\n<iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>\n\n`;
      onChange(value + iframeMarkdown);
    } catch (e) {
      alert('URL inválida.');
    }
  };

  return (
    <div className="w-full flex flex-col gap-2" data-color-mode="light">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
        <input 
          type="file" 
          accept="image/jpeg, image/png, image/jpg" 
          ref={fileInputRef}
          onChange={handleUpload}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md text-slate-700 transition-colors shrink-0"
        >
          {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
          <span>{isUploading ? 'Enviando...' : 'Inserir Imagem Local'}</span>
        </button>
        <button
          type="button"
          onClick={handleYoutube}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md text-slate-700 transition-colors shrink-0"
        >
          <Video className="w-4 h-4 text-red-500" />
          <span>Inserir YouTube</span>
        </button>
        <span className="text-xs text-slate-500">
          Para fotografias, prefira JPEG/JPG para reduzir o tamanho do arquivo.
        </span>
      </div>
      <div className="border border-slate-200 rounded-md overflow-hidden">
        <MDEditor
          value={value}
          onChange={onChange}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize, sanitizeOptions], rehypeFilterIframes],
          }}
          height={500}
          className="w-full border-0"
        />
      </div>
    </div>
  );
}
