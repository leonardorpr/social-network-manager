import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { IButtonProps } from './Button';

const getSize = (size: 'small' | 'normal' | 'large') => {
  const sizes = {
    small: '27px',
    normal: '35px',
    large: '45px',
  };

  return sizes[size];
};

const BaseButton = css<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme, fontSize }) => theme.typography.size[fontSize || 'normal']};
  font-weight: 500;
  line-height: ${({ theme, fontSize }) => theme.typography.lineHeight[fontSize || 'normal']};
  text-decoration: none;
  height: ${({ size }) => getSize(size || 'normal')};
  cursor: pointer;
  transition: all 0.2s ease 0s;
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.accent[300]};
    color: ${({ theme }) => theme.colors.accent[500]};
    cursor: no-drop;
  }
`;

const SolidButton = css<IButtonProps>`
  background-color: ${({ theme, color }) => theme.colors[color || 'primary'][200]};
  border: ${({ theme, color }) => theme.colors[color || 'primary'][color === 'primary' ? 300 : 200]};
  color: ${({ theme }) => theme.colors.accent[100]};

  &:hover {
    background-color: ${({ theme, color, disabled }) => theme.colors[!disabled ? color || 'primary' : 'accent'][300]};
    border: ${({ theme, color }) => theme.colors[color || 'primary'][300]};
  }
`;

const OutlinedButton = css<IButtonProps>`
  background-color: transparent;
  border: ${({ theme, color }) => `1px solid ${theme.colors[color || 'primary'][200]}`};
  color: ${({ theme, color }) => theme.colors[color || 'primary'][200]};

  &:hover {
    border: ${({ theme, color }) => `1px solid ${theme.colors[color || 'primary'][300]}`};
    color: ${({ theme, color }) => theme.colors[color || 'primary'][300]};
  }

  &:disabled {
    border: ${({ theme }) => theme.colors.accent[300]};
    color: ${({ theme }) => theme.colors.accent[500]};
  }
`;

const TextButton = css<IButtonProps>`
  background-color: transparent;
  border: transparent;
  color: ${({ theme, color }) => theme.colors[color || 'primary'][200]};

  &:hover {
    color: ${({ theme, color }) => theme.colors[color || 'primary'][300]};
  }

  &:disabled {
    background: transparent;
    color: ${({ theme }) => theme.colors.accent[500]};
  }
`;

const Button = css<IButtonProps>`
  ${BaseButton}

  ${({ variant }) => variant === 'solid' && SolidButton}

  ${({ variant }) => variant === 'outlined' && OutlinedButton}

  ${({ variant }) => variant === 'text' && TextButton}
`;

export const ContainerButton = styled.button<IButtonProps>`
  ${Button}
`;

export const ContainerLink = styled(Link)<IButtonProps>`
  ${Button}
`;
