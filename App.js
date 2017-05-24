import React from 'react';
import { 
  StyleSheet,
  View,
} from 'react-native';

import Profile from './app/pages/Profile'

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
});
