import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const FieldContainer = styled.div`
  position: relative;
`;

export const FieldIcon = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 1;
  bottom: 15px;
  left: 10px;
`;

export const FieldElement = styled.input<{ icon?: any }>`
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.accent[600]}`};
  border-radius: 4px;
  padding: ${({ icon }) => (!icon ? '10px' : '10px 30px')};
  background-color: ${({ theme }) => theme.colors.accent[100]};
  font-size: ${({ theme }) => theme.typography.size.normal};
  font-weight: 500;
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.accent[800]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.accent[700]};
  }

  &[type='time'] {
    &::-webkit-calendar-picker-indicator {
      background: none;
    }
  }
`;
