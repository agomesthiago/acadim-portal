import React from 'react';
import { Heart } from 'lucide-react';
import { Reveal, SCALE_SPRING } from './Animations';
import { motion } from 'framer-motion';

export function DonationCTA() {
  return (
    <section className="py-24 bg-[#E31B23] relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heart-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 35l-1.45-1.32C13.4 28.53 10 25.5 10 21.5c0-3.2 2.5-5.7 5.7-5.7 1.74 0 3.41.81 4.3 2.09.89-1.28 2.56-2.09 4.3-2.09 3.2 0 5.7 2.5 5.7 5.7 0 4-3.4 7.03-8.55 12.18L20 35z" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heart-pattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Heart className="w-10 h-10 text-[#E31B23]" fill="currentColor" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white mb-6 tracking-tight">
            Sua doação pode mudar o destino de uma família.
          </h2>
          <p className="text-red-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Junte-se a nós nesta corrente do bem. Cada contribuição é um passo rumo a um futuro com mais inclusão, dignidade e respeito.
          </p>
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={SCALE_SPRING}
            className="inline-flex items-center gap-3 bg-white text-[#E31B23] font-black text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-white/25 transition-all"
          >
            Quero Doar Agora
            <Heart className="w-6 h-6" fill="currentColor" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
