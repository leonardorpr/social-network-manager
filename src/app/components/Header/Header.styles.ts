import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.accent[100]};
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  top: 0;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const HeaderLogo = styled.img`
  width: 115px;
  height: 49px;
`;
