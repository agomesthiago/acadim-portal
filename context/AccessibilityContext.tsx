'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark' | 'high-contrast';
export type FontSize = 'normal' | 'large' | 'xlarge';

interface AccessibilityContextType {
  theme: ThemeMode;
  fontSize: FontSize;
  reducedMotion: boolean;
  setTheme: (theme: ThemeMode) => void;
  setFontSize: (size: FontSize) => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  resetAll: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('light');
  const [fontSize, setFontSizeState] = useState<FontSize>('normal');
  const [reducedMotion, setReducedMotionState] = useState<boolean>(false);

  useEffect(() => {
    // Carrega preferências salvas em localStorage
    const savedTheme = localStorage.getItem('acadim_theme') as ThemeMode;
    const savedFont = localStorage.getItem('acadim_font') as FontSize;
    const savedMotion = localStorage.getItem('acadim_motion') === 'true';

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'high-contrast')) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    if (savedFont) {
      setFontSizeState(savedFont);
      document.documentElement.setAttribute('data-font-size', savedFont);
    }
    if (savedMotion) {
      setReducedMotionState(true);
      document.documentElement.setAttribute('data-reduced-motion', 'true');
    }

    // Atalhos de teclado globais para Acessibilidade
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + C -> Alterna Alto Contraste
      if (e.altKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        toggleHighContrast();
      }
      // Alt + + -> Aumenta fonte
      if (e.altKey && (e.key === '+' || e.key === '=')) {
        e.preventDefault();
        increaseFontSize();
      }
      // Alt + - -> Diminui fonte
      if (e.altKey && e.key === '-') {
        e.preventDefault();
        decreaseFontSize();
      }
      // Alt + R -> Reseta preferências de Acessibilidade
      if (e.altKey && (e.key === 'r' || e.key === 'R')) {
        e.preventDefault();
        resetAll();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, fontSize]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('acadim_theme', newTheme);
  };

  const setFontSize = (newSize: FontSize) => {
    setFontSizeState(newSize);
    document.documentElement.setAttribute('data-font-size', newSize);
    localStorage.setItem('acadim_font', newSize);
  };

  const toggleHighContrast = () => {
    const nextTheme = theme === 'high-contrast' ? 'light' : 'high-contrast';
    setTheme(nextTheme);
  };

  const toggleReducedMotion = () => {
    const nextMotion = !reducedMotion;
    setReducedMotionState(nextMotion);
    document.documentElement.setAttribute('data-reduced-motion', String(nextMotion));
    localStorage.setItem('acadim_motion', String(nextMotion));
  };

  const increaseFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'xlarge') setFontSize('large');
    else if (fontSize === 'large') setFontSize('normal');
  };

  const resetFontSize = () => {
    setFontSize('normal');
  };

  const resetAll = () => {
    setTheme('light');
    setFontSize('normal');
    setReducedMotionState(false);
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.removeAttribute('data-font-size');
    document.documentElement.removeAttribute('data-reduced-motion');
    localStorage.removeItem('acadim_theme');
    localStorage.removeItem('acadim_font');
    localStorage.removeItem('acadim_motion');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        theme,
        fontSize,
        reducedMotion,
        setTheme,
        setFontSize,
        toggleHighContrast,
        toggleReducedMotion,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        resetAll,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility deve ser usado dentro de um AccessibilityProvider');
  }
  return context;
};
