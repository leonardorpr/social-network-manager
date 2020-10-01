import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './slices';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ serializableCheck: false }), sagaMiddleware];

const persistConfig = {
  key: 'SocialNetworkManager',
  whiteList: ['schedulePost'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
