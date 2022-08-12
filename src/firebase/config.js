import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC4msJiUgPQO81-ow6o2jYwQHycynzK-F0",
    authDomain: "dojo-blogs-29a2c.firebaseapp.com",
    projectId: "dojo-blogs-29a2c",
    storageBucket: "dojo-blogs-29a2c.appspot.com",
    messagingSenderId: "858209104779",
    appId: "1:858209104779:web:e4afa29870eae10b6ef58e"
};

// init firbase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }