import React, { memo } from 'react';

import theme from 'configs/theme';

import { FieldContainer, FieldIcon, FieldElement } from './Field.styles';

interface IFieldProps {
  value?: any;
  onChange?(event: any): void;
  type?: string;
  placeholder?: string;
  icon?: any;
}

const Field: React.FC<IFieldProps> = ({ value, icon, type = 'text', onChange, placeholder, ...rest }) => {
  if (icon) {
    return (
      <FieldContainer {...rest}>
        <FieldIcon icon={icon} size="sm" color={theme.colors.accent[800]} aria-label="ícone do campo de texto" />
        <FieldElement value={value} type={type} icon={icon} onChange={onChange} placeholder={placeholder} />
      </FieldContainer>
    );
  }

  return <FieldElement value={value} type={type} onChange={onChange} placeholder={placeholder} {...rest} />;
};

export default memo(Field);
