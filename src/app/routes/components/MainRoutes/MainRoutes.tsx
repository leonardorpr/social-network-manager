import React, { useCallback } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from 'configs/history';
import mainRoutesList from 'app/routes/routesList/mainRoutes';

const MainRoutes: React.FC = () => {
  const renderRoutes = useCallback(() => {
    const mappedRoutes = mainRoutesList.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ));

    return mappedRoutes;
  }, []);

  return (
    <Router history={history}>
      <Switch>{renderRoutes()}</Switch>
    </Router>
  );
};

export default MainRoutes;
