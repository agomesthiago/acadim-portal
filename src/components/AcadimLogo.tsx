import React from 'react';

export function AcadimLogo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Red Arch Symbol */}
      <div className="relative flex-shrink-0">
        <svg width={compact ? "36" : "46"} height={compact ? "32" : "40"} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 75 C 10 30, 40 10, 85 10 C 60 25, 45 45, 45 75 C 32 55, 22 65, 10 75 Z" fill="#E31B23"/>
          <path d="M28 75 C 28 45, 52 28, 85 28 C 65 38, 55 55, 55 75 Z" fill="#E31B23"/>
          <path d="M48 75 C 48 58, 65 46, 85 46 C 72 56, 68 66, 68 75 Z" fill="#E31B23"/>
        </svg>
      </div>

      <div className="flex flex-col justify-center">
        {/* Blue Capsule Badge */}
        <div className="bg-[#0066CC] px-3 py-0.5 rounded-full inline-flex items-center shadow-md">
          <span className="font-display font-black text-white tracking-widest text-sm sm:text-base uppercase leading-none">
            ACADIM
          </span>
        </div>
        {!compact && (
          <span className={`text-[10px] sm:text-[11px] font-semibold tracking-tight mt-1 leading-tight ${
            light ? 'text-white/80' : 'text-[#0066CC]'
          }`}>
            Associação Carioca de Distrofia Muscular
          </span>
        )}
      </div>
    </div>
  );
}
