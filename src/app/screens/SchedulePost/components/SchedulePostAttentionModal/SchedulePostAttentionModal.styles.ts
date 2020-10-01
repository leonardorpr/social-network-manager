import styled from 'styled-components';

import { Button } from 'app/components';

export const SchedulePostAttentionModalImage = styled.img`
  width: 190px;
  height: 190px;
`;

export const SchedulePostAttentionModalText = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.big};
  font-weight: 500;
  line-height: ${({ theme }) => theme.typography.lineHeight.big};
  margin-bottom: 10px;
`;

export const SchedulePostAttentionModalTextNormal = styled.h4`
  font-size: ${({ theme }) => theme.typography.size.large};
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  margin-bottom: 20px;
`;

export const SchedulePostAttentionModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SchedulePostAttentionModalButton = styled(Button)`
  width: 185px;

  &:last-child {
    margin-left: 10px;
  }
`;
