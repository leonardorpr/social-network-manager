import React, { memo } from 'react';

import { CardContainer, CardTitle } from './Card.styles';

interface ICardProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ title, children, ...rest }) => (
  <CardContainer {...rest}>
    <CardTitle>{title}</CardTitle>
    {children}
  </CardContainer>
);

export default memo(Card);
