import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

import { BasePage, Button, Card, DatePicker, Field, Footer } from 'app/components';

export const SchedulePostPage = styled(BasePage)`
  padding: 0px 30px;
  margin-top: 100px;
  margin-bottom: 87px;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    display: flex;
    flex-direction: row;

    #post-preview {
      margin-top: 0px !important;
      margin-left: 30px;
      height: 100%;
    }
  }
`;

export const SchedulePostGrid = styled.div`
  flex-grow: 1;
`;

export const SchedulePostFooter = styled(Footer)`
  justify-content: space-between;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    justify-content: flex-end;
  }
`;

export const SchedulePostButton = styled(Button)`
  width: ${({ variant }) => (variant === 'text' ? 'auto' : '110px')};

  ${MediaQueries.BIGGER_THAN_SMALL} {
    width: ${({ variant }) => (variant === 'text' ? 'auto' : '185px')};
    margin-right: 16px;
  }
`;

export const SchedulePostCard = styled(Card)`
  &:not(:first-child) {
    margin-top: 15px;
  }

  ${MediaQueries.BIGGER_THAN_SMALL} {
    &:not(:first-child) {
      margin-top: 30px;
    }
  }
`;

export const SchedulePostViewPostButton = styled(Button)`
  width: 100%;
  margin-top: 11px;
`;

export const SchedulePostDatePicker = styled(DatePicker)`
  flex-grow: 1;
  margin-right: 30px;
`;

export const SchedulePostTime = styled(Field)`
  flex-grow: 1;
`;

export const SchedulePostContainerPostPreview = styled.div`
  padding: 36px 24px;
  overflow: auto;
`;

export const SchedulePostPublicationDateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
