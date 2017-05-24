import React from 'react';
import { Alert } from 'react-native';

import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import { createStore, combineReducers } from 'redux';

import ProfileForm from '../components/ProfileForm';
import FirebaseHelper from '../lib/FirebaseHelper'

const reducer = combineReducers(reducers);
const store = createStore(reducer);

/**
 *
 * blog: https://medium.com/wolox-driving-innovation/https-medium-com-wolox-driving-innovation-easy-forms-in-react-native-with-redux-form-1cdc16a9a889
 * 
 * github: https://github.com/sbalay/react-native-redux-form-example
 *
 */
export default class Profile extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ProfileForm onSubmit={(values) => new FirebaseHelper().updateProfile(values)}/>
      </Provider>
    );
  }
}