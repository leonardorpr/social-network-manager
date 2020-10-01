import styled from 'styled-components';

export const SchedulesFilterButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.typography.size.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  color: ${({ theme }) => theme.colors.accent[800]};

  svg {
    margin-left: 4px;
  }
`;
