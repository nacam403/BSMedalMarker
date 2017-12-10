import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './App';

const store = createStore(reducers);

const Component = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('BSMedalMarker', () => Component);
