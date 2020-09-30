import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

import { BasePage, Button } from 'app/components';

export const HomeContainer = styled(BasePage)`
  height: 100%;
`;

export const HomeImagePosts = styled.img`
  width: 375px;
  height: 424px;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    width: 408px;
    height: 461px;
  }
`;

export const HomeButton = styled(Button)`
  width: 185px;
  margin-top: 50px;
`;
