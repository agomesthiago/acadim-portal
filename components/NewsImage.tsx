"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { DEFAULT_NEWS_BANNER } from '@/lib/news-types';

interface NewsImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
}

export default function NewsImage({ src, fallbackSrc = DEFAULT_NEWS_BANNER, alt, ...props }: NewsImageProps) {
  const [error, setError] = useState(false);

  const currentSrc = error ? fallbackSrc : (src || fallbackSrc);
  const isLocal = currentSrc.startsWith('/');

  const isSvg = currentSrc.toLowerCase().endsWith('.svg');

  if (isLocal && !isSvg) {
    return (
      <Image
        src={currentSrc}
        alt={alt || 'Imagem'}
        onError={() => setError(true)}
        {...props}
      />
    );
  }

  // Fallback seguro para SVG e imagens externas usando <img> padrão
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={currentSrc}
      alt={alt || 'Imagem'}
      onError={() => setError(true)}
      style={{ objectFit: props.fill ? 'cover' : 'contain', width: '100%', height: '100%' }}
      className={props.className}
      loading={props.priority ? "eager" : "lazy"}
    />
  );
}
