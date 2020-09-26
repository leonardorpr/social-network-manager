import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

import { Button } from 'app/components';

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

  ${MediaQueries.BIGGER_THAN_SMALL} {
    margin-top: 75px;
  }
`;
