import React from 'react';

import { DataTable } from 'app/components';

import { SchedulesContainer, SchedulesTitle } from './Schedules.styles';

const Schedules: React.FC = () => (
  <SchedulesContainer>
    <SchedulesTitle>Listagem de agendamento</SchedulesTitle>
    <DataTable />
  </SchedulesContainer>
);

export default Schedules;
