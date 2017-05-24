import React from 'react';
import { 
  StyleSheet,
  View,
} from 'react-native';

import Profile from './app/pages/Profile'

import { Provider } from 'react-redux';
import * as reducers from './app/reducers';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <Profile />
      </Provider>
    )
  }
}

