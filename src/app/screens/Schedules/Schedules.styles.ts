import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

import { BasePage } from 'app/components';

export const SchedulesContainer = styled(BasePage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    padding: 40px;
  }
`;

export const SchedulesTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.size.large};
  font-weight: 500;
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  color: ${({ theme }) => theme.colors.accent[800]};
  margin-bottom: 30px;
`;
