import React, { memo } from 'react';

import { FooterContainer } from './Footer.styles';

interface IFooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<IFooterProps> = ({ children, ...rest }) => (
  <FooterContainer {...rest}>{children}</FooterContainer>
);

export default memo(Footer);
