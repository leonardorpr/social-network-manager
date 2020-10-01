import styled from 'styled-components';

export const SelectFieldContainer = styled.select`
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.accent[600]}`};
  border-radius: 4px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.accent[100]};
  font-size: ${({ theme }) => theme.typography.size.normal};
  font-weight: 500;
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.accent[800]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.accent[700]};
  }
`;
