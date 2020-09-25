import styled from 'styled-components';

export const BasePageContainer = styled.section<{ centralized?: boolean }>`
  display: ${({ centralized }) => (centralized ? 'flex' : 'block')};
  align-items: ${({ centralized }) => (centralized ? 'center' : 'normal')};
  justify-content: ${({ centralized }) => (centralized ? 'center' : 'normal')};
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.accent[200]};
  padding-top: 80px;
`;
