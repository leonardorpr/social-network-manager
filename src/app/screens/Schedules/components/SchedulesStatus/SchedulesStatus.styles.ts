import styled from 'styled-components';

import { ScheduleStatus } from 'core/enums/ScheduleStatus';

const statusColor: { [key: number]: string } = {
  [ScheduleStatus.Posted]: '#27AE60',
  [ScheduleStatus.NotApproved]: '#F2C94C',
  [ScheduleStatus.Scheduled]: '#2F80ED',
  [ScheduleStatus.PostedWithReservations]: '#EB5757',
};

export const SchedulesStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const SchedulesStatusIndicator = styled.span<{ status: number }>`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({ status }) => statusColor[status]};
`;

export const SchedulesStatusDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  margin-left: 6px;
`;
