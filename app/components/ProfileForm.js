import React from 'react';
import { ActivityIndicator, View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'

import {load as loadProfile} from '../reducers/profileReducer'
import FormTextInput from './FormTextInput';

import FirebaseTool from '../lib/FirebaseTool'

const data = {
  // used to populate "account" reducer when "Load" is clicked
  first_name: 'Jane',
  last_name: 'Doe',
  company: 'Facebook',
  department: 'HR',
  position: 'manager',
  email: 'test@test.com',
}

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    FirebaseTool.loadProfile((profile) => {
      this.setState({loading: false})
      this.props.load(profile)
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator style={styles.activityIndicator} size='large' />
        </View>
      ) 
    }

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

        <TouchableOpacity style={styles.buttonStyle} onPress={this.props.handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.load(data)}>
          <Text style={styles.buttonText}>Load</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  
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
  },
  loadingOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    padding: 8,
  },
});

// reference: http://redux-form.com/6.7.0/examples/initializeFromState/
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ProfileForm = reduxForm({
  form: 'editProfile', // a unique identifier for this form
})(ProfileForm)

// You have to connect() to any reducers that you wish to connect to yourself
ProfileForm = connect(
  state => ({
    initialValues: state.profileReducer.data // pull initial values from profile reducer
  }),
  {load: loadProfile} // bind loadProfile loading action creator
)(ProfileForm)

export default ProfileForm
