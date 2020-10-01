import React, { memo } from 'react';

import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'configs/theme';

import { SchedulesFilterButtonContainer } from './SchedulesFilterButton.styles';

interface ISchedulesFilterButtonProps {
  isAscendingOrder: boolean;
  description: string;
  onClick(): void;
}

const SchedulesFilterButton: React.FC<ISchedulesFilterButtonProps> = ({ description, onClick, isAscendingOrder }) => (
  <SchedulesFilterButtonContainer onClick={onClick}>
    {description}
    <FontAwesomeIcon icon={isAscendingOrder ? faArrowDown : faArrowUp} size="sm" color={theme.colors.accent[800]} />
  </SchedulesFilterButtonContainer>
);

export default memo(SchedulesFilterButton);
