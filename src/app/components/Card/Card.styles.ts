import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.accent[100]};
  border-radius: 4px;
  border: ${({ theme }) => `1px solid ${theme.colors.accent[300]}`};
  padding: 5px 15px 15px 15px;
`;

export const CardTitle = styled.h3`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: ${({ theme }) => theme.typography.size.large};
  line-height: ${({ theme }) => theme.typography.size.large};
  color: ${({ theme }) => theme.colors.accent[900]};
  margin-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    width: calc(100% + 30px);
    height: 1px;
    left: -15px;
    bottom: -5px;
    background-color: ${({ theme }) => theme.colors.accent[300]};
  }
`;
