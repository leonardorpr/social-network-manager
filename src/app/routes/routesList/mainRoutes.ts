import { IConfigureRoutes } from 'core/interfaces/IConfigureRoutes';

import Home from 'app/screens/Home';

const mainRoutes: IConfigureRoutes[] = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
];

export default mainRoutes;
