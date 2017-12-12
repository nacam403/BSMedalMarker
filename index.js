import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { PersistGate } from 'redux-persist/es/integration/react';

import reducers from './reducers';
import App from './App';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['scene'],
  debug: true
};

const reducer = persistReducer(persistConfig, reducers);
const store = createStore(reducer);
const persistor = persistStore(store);

const Component = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent('BSMedalMarker', () => Component);
