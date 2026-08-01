import React from 'react';
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';

export function MascotsIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-blue-50 via-white to-red-50 p-6 border-2 border-[#0066CC]/20 shadow-2xl flex flex-col items-center justify-between overflow-hidden group">
      <div className="absolute inset-0 bg-radial from-[#0066CC]/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Badge Top */}
      <div className="z-10 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full border border-[#0066CC]/20 shadow-sm flex items-center gap-2">
        <Smile className="w-4 h-4 text-[#E31B23]" />
        <span className="text-xs font-bold text-[#0066CC] uppercase tracking-wider">Nossos Mascotes Oficiais</span>
      </div>

      {/* Mascot Avatars Illustration */}
      <div className="relative z-10 w-full flex items-center justify-center gap-4 my-2">
        {/* Girl Mascot Card */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.03 }}
          className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-red-100 flex flex-col items-center text-center"
        >
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-pink-200 to-yellow-100 border-4 border-[#E31B23] flex items-center justify-center shadow-md mb-2 overflow-hidden">
            {/* Character Graphic */}
            <div className="absolute top-2 w-16 h-10 bg-yellow-300 rounded-t-full border-b-2 border-yellow-500" />
            <div className="absolute top-6 w-10 h-7 bg-sky-400 rounded-md border-2 border-sky-600 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white border border-sky-700" />
              <div className="w-3 h-3 rounded-full bg-white border border-sky-700" />
            </div>
            <div className="absolute bottom-2 w-8 h-2 bg-red-400 rounded-full" />
          </div>
          <p className="font-display font-bold text-sm text-[#0B132B]">Nossa Heroína</p>
          <p className="text-[11px] text-slate-500">Cadeira vermelha & óculos azuis</p>
        </motion.div>

        {/* Boy Mascot Card */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.03 }}
          className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 flex flex-col items-center text-center"
        >
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-blue-200 to-yellow-100 border-4 border-[#0066CC] flex items-center justify-center shadow-md mb-2 overflow-hidden">
            {/* Character Graphic */}
            <div className="absolute top-1 w-16 h-8 bg-slate-900 rounded-t-full" />
            <div className="absolute top-8 w-12 h-6 flex items-center justify-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
            </div>
            <div className="absolute bottom-2 w-7 h-2 bg-red-500 rounded-full" />
          </div>
          <p className="font-display font-bold text-sm text-[#0B132B]">Nosso Campeão</p>
          <p className="text-[11px] text-slate-500">Cadeira amarela & camiseta vermelha</p>
        </motion.div>
      </div>

      {/* Official ACADIM Mascot Pill Footer */}
      <div className="z-10 w-full bg-[#0066CC] py-2.5 rounded-xl shadow-md text-center">
        <span className="font-display font-black text-white text-lg tracking-widest uppercase">
          ACADIM
        </span>
        <p className="text-[10px] text-white/90 font-medium">Inclusão, Alegria e Caminhada Juntos</p>
      </div>
    </div>
  );
}
