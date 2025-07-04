import React from 'react';
import { Modal as BootstrapModal, type ModalProps } from 'react-bootstrap';

interface CustomModalProps extends ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<CustomModalProps> = ({ children, ...props }) => {
  return (
    <BootstrapModal {...props}>
      {children}
    </BootstrapModal>
  );
};

export default Modal;