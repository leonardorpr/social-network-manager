import React, { memo } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'configs/theme';

import { logo } from 'assets/images';

import useIsMobile from 'core/hooks/useIsMobile';

import Avatar from './components/Avatar';
import { HeaderContainer, HeaderLogo } from './Header.styles';

const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <HeaderContainer>
      {isMobile && <FontAwesomeIcon icon={faBars} color={theme.colors.accent[900]} size="lg" />}
      {!isMobile && <HeaderLogo src={logo} alt="mLabs" />}
      <Avatar />
    </HeaderContainer>
  );
};

export default memo(Header);
