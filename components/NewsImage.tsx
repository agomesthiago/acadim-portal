"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface NewsImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
}

export default function NewsImage({ src, fallbackSrc = '/assets/community-bg.jpg', alt, ...props }: NewsImageProps) {
  const [error, setError] = useState(false);

  const currentSrc = error ? fallbackSrc : (src || fallbackSrc);
  const isLocal = currentSrc.startsWith('/');

  if (isLocal) {
    return (
      <Image
        src={currentSrc}
        alt={alt || 'Imagem'}
        onError={() => setError(true)}
        {...props}
      />
    );
  }

  // Fallback seguro para imagens externas usando <img> padrão
  // Evita crash do next/image por domínios não configurados
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
