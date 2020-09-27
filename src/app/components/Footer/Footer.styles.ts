import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 67px;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.accent[100]};
`;
