import { IConfigureRoutes } from 'core/interfaces/IConfigureRoutes';

import Home from 'app/screens/Home';
import SchedulePost from 'app/screens/SchedulePost';

const mainRoutes: IConfigureRoutes[] = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: SchedulePost,
    path: '/agendar-post',
    exact: true,
  },
];

export default mainRoutes;
