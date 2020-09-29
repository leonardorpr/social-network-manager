import styled from 'styled-components';

export const BasePageContainer = styled.main<{ centralized?: boolean }>`
  display: ${({ centralized }) => (centralized ? 'flex' : 'block')};
  align-items: ${({ centralized }) => (centralized ? 'center' : 'normal')};
  justify-content: ${({ centralized }) => (centralized ? 'center' : 'normal')};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.accent[200]};
  margin-top: 80px;
  overflow-y: auto;
`;
