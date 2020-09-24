import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyles from 'assets/styles';

import { store, persistor } from 'core/store';

import { MainRoutes } from 'app/routes';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <MainRoutes />
    </PersistGate>
  </Provider>
);

export default App;
