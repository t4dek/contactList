import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { AppNavigator }     from './navigators';

import configureStore from './store';
import { loadUserData } from './actions/userActions';

const store = configureStore();
store.dispatch(loadUserData());

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
