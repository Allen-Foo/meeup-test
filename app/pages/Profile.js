import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProfileForm from '../components/ProfileForm';
import FirebaseTool from '../lib/FirebaseTool'

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
      <View style={styles.container}>
        <ProfileForm onSubmit={(values) => FirebaseTool.updateProfile(values)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
});