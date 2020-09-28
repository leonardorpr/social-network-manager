import React, { memo } from 'react';

import { BasePageContainer } from './BasePage.styles';

interface IBasePageProps {
  children: React.ReactNode;
  centralized?: boolean;
}

const BasePage: React.FC<IBasePageProps> = ({ children, centralized, ...rest }) => (
  <BasePageContainer centralized={centralized} {...rest}>
    {children}
  </BasePageContainer>
);

export default memo(BasePage);
