import React, { memo } from 'react';

import { ScheduleStatus } from 'core/enums/ScheduleStatus';

import {
  SchedulesStatusContainer,
  SchedulesStatusIndicator,
  SchedulesStatusDescription,
} from './SchedulesStatus.styles';

const statusDescription: { [key: number]: string } = {
  [ScheduleStatus.Posted]: 'Postado',
  [ScheduleStatus.NotApproved]: 'Não aprovado',
  [ScheduleStatus.Scheduled]: 'Agendado',
  [ScheduleStatus.PostedWithReservations]: 'Postado com ressalvas',
};

interface ISchedulesStatusProps {
  status: number;
}

const SchedulesStatus: React.FC<ISchedulesStatusProps> = ({ status }) => (
  <SchedulesStatusContainer>
    <SchedulesStatusIndicator status={status} />
    <SchedulesStatusDescription>{statusDescription[status]}</SchedulesStatusDescription>
  </SchedulesStatusContainer>
);

export default memo(SchedulesStatus);
