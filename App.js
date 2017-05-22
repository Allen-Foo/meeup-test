import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileRow title={'Name'} />
      </View>
    );
  }
}

const ProfileRow = props => {
  const { title } = props

  return (
    <View style={styles.row}>
      <Text style={styles.title}>Name</Text>
      <TextInput 
        style={styles.textInput}
        underlineColorAndroid={'transparent'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 16
  },
  textInput: {
    fontSize: 16,
    color: 'blue',
    minWidth: 10,
    maxWidth: 200
  }
});
