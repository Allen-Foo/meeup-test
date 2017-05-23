import React from 'react';
import { Provider } from 'react-redux';
import { Alert } from 'react-native';

import ProfileForm from '../components/ProfileForm';
import store from '../redux/store';

export default class Profile extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ProfileForm onSubmit={(values) => Alert.alert('Submitted!', JSON.stringify(values))}/>
      </Provider>
    );
  }
}