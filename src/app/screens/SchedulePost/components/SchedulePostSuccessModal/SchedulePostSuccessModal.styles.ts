import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

import { fadeInUp } from 'assets/animations';

import { Button } from 'app/components';

export const SchedulePostSuccessModalContainer = styled.dialog`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  outline-width: 0px;
`;

export const SchedulePostSuccessModalContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  width: 350px;
  height: 420px;
  border-radius: 4px;
  animation: ${fadeInUp} 0.25s linear;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    width: 870px;
  }
`;

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
