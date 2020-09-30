import React, { memo } from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'configs/theme';

import { ModalContainer, ModalHeader, ModalTitle, ModalCloseButton } from './Modal.styles';

interface IModalProps {
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<IModalProps> = ({ children, title }) => (
  <ModalContainer>
    <ModalHeader>
      <ModalTitle>{title}</ModalTitle>
      <ModalCloseButton>
        <FontAwesomeIcon icon={faTimes} width="12px" height="12px" color={theme.colors.accent[800]} />
      </ModalCloseButton>
    </ModalHeader>
    {children}
  </ModalContainer>
);

export default memo(Modal);
