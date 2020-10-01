import styled from 'styled-components';

import { Button } from 'app/components';

export const SchedulePostSuccessModalImage = styled.img`
  width: 190px;
  height: 190px;
`;

export const SchedulePostSuccessModalText = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.big};
  font-weight: 500;
  line-height: ${({ theme }) => theme.typography.lineHeight.big};
  margin-bottom: 20px;
`;

export const SchedulePostSuccessModalButton = styled(Button)`
  width: 185px;
`;
