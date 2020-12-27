import React, { useContext, createContext, useState } from 'react';

interface ModalContextInterface {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const ContextInstance: ModalContextInterface = {
  isModalOpen: false,
  setIsModalOpen: () => { },
};

const ModalContext = createContext(ContextInstance);

export default function GlobalModalContext({ children }: any) {
  const modal = useProvideModal();
  return (
    <ModalContext.Provider value={modal}>
      {children}
      <p>This is modal content</p>
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

function useProvideModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return {
    isModalOpen,
    setIsModalOpen,
  };
}
