'use client';

import React, { createContext, useContext, useState } from 'react';
import { PixModal } from '@/components/PixModal';

interface PixContextType {
  isPixOpen: boolean;
  openPixModal: () => void;
  closePixModal: () => void;
}

const PixContext = createContext<PixContextType | undefined>(undefined);

export const PixProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPixOpen, setIsPixOpen] = useState(false);

  const openPixModal = () => setIsPixOpen(true);
  const closePixModal = () => setIsPixOpen(false);

  return (
    <PixContext.Provider value={{ isPixOpen, openPixModal, closePixModal }}>
      {children}
      {/* O Modal vive no provedor, sendo renderizado uma única vez para toda a aplicação */}
      <PixModal isOpen={isPixOpen} onClose={closePixModal} />
    </PixContext.Provider>
  );
};

export const usePix = () => {
  const context = useContext(PixContext);
  if (!context) {
    throw new Error('usePix deve ser usado dentro de um PixProvider');
  }
  return context;
};
