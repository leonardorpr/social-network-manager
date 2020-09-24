import React from 'react';

export interface IConfigureRoutes {
  component: React.FunctionComponent | React.ComponentClass;
  path: string;
  exact: boolean;
}
