import { useState } from 'react';

import ModalContent from '@/components/Modal';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  interface Props {
    title: string;
    children: React.ReactNode;
  }

  const Modal = ({ title, children }: Props) => {
    return (
      <ModalContent open={isOpen} onClose={closeModal} title={title}>
        {children}
      </ModalContent>
    );
  };

  return { Modal, openModal, closeModal };
};

export default useModal;
