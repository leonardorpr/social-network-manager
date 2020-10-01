import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import theme from 'configs/theme';

import GlobalStyles from 'assets/styles';

import { store, persistor } from 'core/store';

import { MainRoutes } from 'app/routes';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <MainRoutes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
