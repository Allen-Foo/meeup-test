import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Test from './src/containers/app';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileRow title={'First Name'} />
        <ProfileRow title={'Last Name'} />
        <ProfileSeparator />

        <ProfileRow title={'Company'} />
        <ProfileRow title={'Department'} />
        <ProfileRow title={'Position'} />
        <ProfileSeparator />

        <ProfileRow title={'Email'} />
        <ProfileSeparator />

        <TouchableOpacity style={styles.buttonStyle} >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <Test />
      </View>
    );
  }
}

const ProfileRow = props => {
  const { title } = props

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
        style={styles.textInput}
        underlineColorAndroid={'transparent'}
      />
    </View>
  )
}

const ProfileSeparator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  row: {
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center'
  },
  title: {
    fontSize: 16
  },
  textInput: {
    fontSize: 18,
    color: '#00f',
    textAlign: 'right',
    width: SCREEN_WIDTH * 0.5,
  },
  separator: {
    height: 10,
    backgroundColor: '#eee'
  },
  buttonStyle: {
    backgroundColor: '#698eff',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 3
  },
  buttonText: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    color: '#fff'
  }
});
