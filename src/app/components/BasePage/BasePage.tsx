import React, { memo } from 'react';

import { BasePageContainer } from './BasePage.styles';

interface IBasePageProps {
  children: React.ReactElement;
  centralized?: boolean;
}

const BasePage: React.FC<IBasePageProps> = ({ children, centralized }) => (
  <BasePageContainer centralized={centralized}>{children}</BasePageContainer>
);

export default memo(BasePage);
