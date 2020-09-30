import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

export const PostPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  article:first-child {
    margin-bottom: 35px;
  }

  ${MediaQueries.BIGGER_THAN_SMALL} {
    flex-direction: row;
    align-items: center;
    height: 100%;

    article:first-child {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  }
`;
