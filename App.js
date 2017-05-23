import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAg77DQ5EUeT9LXeOKIgZ74jamqPKNHV3w",
  authDomain: "meeup-test-4cf00.firebaseapp.com",
  databaseURL: "https://meeup-test-4cf00.firebaseio.com",
  projectId: "meeup-test-4cf00",
  storageBucket: "meeup-test-4cf00.appspot.com",
  messagingSenderId: "614047587922"
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

import Profile from './app/pages/Profile'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      profile: {}
    }
    this.itemsRef = this.getRef().child('profile');
  }


  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      this.setState({
        profile: snap.val()
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef)
  }

  render() {
    const {
      first_name = '',
      last_name = '',
      company = '',
      department = '',
      position = '',
      email = '',
    } = this.state.profile

    return (
      <View style={styles.container}>
        <Profile />
      </View>
    );
  }
}

const ProfileRow = props => {
  const { title, value } = props

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
        value={value}
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
