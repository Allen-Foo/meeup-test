import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import FormTextInput from './FormTextInput';

function ProfileForm(props) {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <ProfileRow title={'First Name'} name={'first_name'}/>
      <ProfileRow title={'Last Name'} name={'last_name'}/>
      <ProfileSeparator />

      <ProfileRow title={'Company'} name={'company'}/>
      <ProfileRow title={'Department'} name={'department'}/>
      <ProfileRow title={'Position'} name={'position'}/>
      <ProfileSeparator />

      <ProfileRow title={'Email'} name={'email'}/>
      <ProfileSeparator />

      <TouchableOpacity style={styles.buttonStyle} onPress={props.handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const ProfileRow = props => {
  const { title, name } = props

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Field
        name={name}
        component={FormTextInput}
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

export default reduxForm({ form: 'signIn' })(ProfileForm);