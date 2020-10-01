import React, { useState, useCallback, useImperativeHandle, forwardRef } from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'configs/theme';

import { ModalContainer, ModalContent, ModalHeader, ModalTitle, ModalCloseButton } from './Modal.styles';

export interface IModalHandles {
  openModal(): void;
  closeModal(): void;
}

interface IModalProps {
  children: React.ReactNode;
  title?: string;
  isLarge?: boolean;
}

const Modal: React.ForwardRefRenderFunction<IModalHandles, IModalProps> = (
  { children, title, isLarge = false },
  ref,
) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleModal = useCallback(
    (isVisible: boolean) => {
      setVisible(isVisible);
    },
    [setVisible],
  );

  useImperativeHandle(ref, () => ({
    openModal: () => handleVisibleModal(true),
    closeModal: () => handleVisibleModal(false),
  }));

  if (!visible) {
    return null;
  }

  return (
    <ModalContainer open={visible}>
      <ModalContent isLarge={isLarge}>
        {title && (
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalCloseButton onClick={() => handleVisibleModal(false)}>
              <FontAwesomeIcon icon={faTimes} width="12px" height="12px" color={theme.colors.accent[800]} />
            </ModalCloseButton>
          </ModalHeader>
        )}
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default forwardRef(Modal);
