import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_OUT }
  })
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
} as const;

export function Reveal({ children, delay = 0, className = '', y = 20 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
