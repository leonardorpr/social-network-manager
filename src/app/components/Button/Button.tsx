import React, { memo } from 'react';

import { ContainerButton, ContainerLink } from './Button.styles';

export interface IButtonProps {
  label?: string;
  to?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  element?: 'button' | 'link';
  size?: 'small' | 'normal' | 'large';
  fontSize?: 'small' | 'normal' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
  variant?: 'solid' | 'outlined' | 'text';
  onClick?(): void;
}

const Button: React.FC<IButtonProps> = ({ label, element = 'button', type = 'button', to, ...rest }) => {
  if (element === 'button') {
    return (
      <ContainerButton type={type} {...rest}>
        {label}
      </ContainerButton>
    );
  }

  return (
    <ContainerLink to={to} {...rest}>
      {label}
    </ContainerLink>
  );
};

export default memo(Button);
