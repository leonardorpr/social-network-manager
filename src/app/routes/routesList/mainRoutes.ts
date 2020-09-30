import { IConfigureRoutes } from 'core/interfaces/IConfigureRoutes';

import Home from 'app/screens/Home';
import SchedulePost from 'app/screens/SchedulePost';
import Schedules from 'app/screens/Schedules';

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
  {
    component: Schedules,
    path: '/agendamentos',
    exact: true,
  },
];

export default mainRoutes;
