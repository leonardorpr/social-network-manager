import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

import { fadeInUp } from 'assets/animations';

export const ModalContainer = styled.dialog`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  outline-width: 0px;
`;

export const ModalContent = styled.section<{ isLarge?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  width: 350px;
  height: ${({ isLarge }) => (isLarge ? '620px' : '420px')};
  border-radius: 4px;
  animation: ${fadeInUp} 0.25s linear;
  padding: 10px 0px;
  overflow: auto;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    width: 870px;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.accent[300]}`};
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent[900]};
  margin-left: 10px;
`;

export const ModalCloseButton = styled.button`
  margin-right: 10px;
`;
