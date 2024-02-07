import { useState } from 'react';

import ModalContent from '@/components/Modal';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUnmount, setIsUnmount] = useState<boolean>(false);

  const openModal = () => {
    setIsUnmount(false);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsUnmount(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  interface Props {
    title?: string;
    children: React.ReactNode;
  }

  const Modal = ({ title, children }: Props) => {
    return (
      <ModalContent
        onClose={closeModal}
        isOpen={isOpen}
        isUnmount={isUnmount}
        title={title}
      >
        {children}
      </ModalContent>
    );
  };

  return { Modal, openModal, closeModal };
};

export default useModal;
