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

let _instance = null

// reference: https://github.com/davideast/firebase-react-native-sample/blob/master/index.ios.js
class FirebaseTool {
  static getInstance() {
    if(_instance == null) {
      _instance = new FirebaseTool()
      _instance.constructor = null
    }

    return _instance
  }

  constructor() {
    this.itemsRef = this.getRef().child('profile');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  loadProfile(callback) {
    // Listens for exactly one event of the specified event type, 
    // and then stops listening.
    this.itemsRef.once('value')
      .then((snap) => callback(snap.val()))
      .catch((err) => console.warn('error', err))
  }

  // Atomically modifies the data at this location.
  // reference: https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#transaction
  updateProfile(profile) {
    this.itemsRef.transaction(function(currentData) {
      // always update the profile
      return profile
    }, function(error, committed, snapshot) {
      if (error) {
        console.warn('Transaction failed abnormally!', error);
      } else if (!committed) {
        console.warn('We aborted the transaction (because data already exists).');
      } else {
        console.warn('profile updated!');
      }
      console.warn("profile: ", snapshot.val());
    });
  }
}

export default FirebaseTool.getInstance()
