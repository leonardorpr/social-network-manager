import React, { memo, useCallback } from 'react';

import { SelectFieldContainer } from './SelectField.styles';

interface ISelectFieldProps {
  value: any;
  onSelectChange(event: React.ChangeEvent<HTMLSelectElement>): void;
  options: { label: string; value: any }[];
}

const SelectField: React.FC<ISelectFieldProps> = ({ value, onSelectChange, options, ...rest }) => {
  const renderOptions = useCallback(() => {
    const mappedOptions = options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));

    return mappedOptions;
  }, [options]);

  return (
    <SelectFieldContainer value={value} onChange={onSelectChange} {...rest}>
      {renderOptions()}
    </SelectFieldContainer>
  );
};

export default memo(SelectField);
