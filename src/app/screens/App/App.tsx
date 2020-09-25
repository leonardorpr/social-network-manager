import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import theme from 'configs/theme';

import GlobalStyles from 'assets/styles';

import { store, persistor } from 'core/store';

import { MainRoutes } from 'app/routes';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainRoutes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
