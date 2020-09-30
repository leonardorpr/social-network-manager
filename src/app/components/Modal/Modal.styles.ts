import styled from 'styled-components';

export const ModalContainer = styled.dialog`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.accent[100]};
  border: ${({ theme }) => `1px solid ${theme.colors.accent[300]}`};
  z-index: 10;
  outline-width: 0px;
`;

export const ModalHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.accent[300]}`};
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  color: ${({ theme }) => theme.colors.accent[900]};
  margin-left: 10px;
`;

export const ModalCloseButton = styled.button`
  margin-right: 10px;
`;
