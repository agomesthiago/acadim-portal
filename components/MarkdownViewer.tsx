"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { visit } from 'unist-util-visit';
import '@uiw/react-markdown-preview/markdown.css';

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false });

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

interface MarkdownViewerProps {
  source: string;
}

export default function MarkdownViewer({ source }: MarkdownViewerProps) {
  return (
    <div data-color-mode="light" className="w-full">
      <MarkdownPreview
        source={source}
        rehypePlugins={[[rehypeSanitize, sanitizeOptions], rehypeFilterIframes]}
        wrapperElement={{
          "data-color-mode": "light"
        }}
        className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-text-primary prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-base prose-strong:text-text-primary prose-li:text-slate-700 text-base"
        style={{ backgroundColor: 'transparent' }}
      />
    </div>
  );
}
