import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

import { BasePage, SelectField } from 'app/components';

export const SchedulesContainer = styled(BasePage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-top: 100px;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    padding: 40px;
  }
`;

export const SchedulesTitleContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SchedulesTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.size.large};
  font-weight: 500;
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  color: ${({ theme }) => theme.colors.accent[800]};
`;

export const SchedulesSelectStatus = styled(SelectField)`
  width: 150px;
`;

export const SchedulesPostImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ScheduleDate = styled.time`
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  text-align: left;
`;

export const SchedulePreviewButton = styled.button`
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  text-decoration-line: underline;
  color: #1661f3;
  margin: 0 auto;
`;
