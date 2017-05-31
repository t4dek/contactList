import React, { Component }             from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider }                     from 'react-redux';
import reducers from './reducers';

import thunk from 'redux-thunk';

import App from './containers/app';

const store = {};

export default class Root extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
