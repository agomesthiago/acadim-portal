import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionBadgeProps {
  icon?: LucideIcon;
  text: string;
  variant?: 'red' | 'blue' | 'white' | 'subtle';
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  icon: Icon,
  text,
  variant = 'red',
  className = '',
}) => {
  const variantStyles = {
    red: 'bg-brand-red/10 text-brand-red border-brand-red/20',
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    white: 'bg-white/10 text-white border-white/20',
    subtle: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border shadow-xs ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{text}</span>
    </div>
  );
};
