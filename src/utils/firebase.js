// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, 'messages');


export function writeNewMessage(name, message) {

    // New message data object structure.
    const postData = {
        name: name,
        message: message
    };

    // Get a key for a new message.
    const newPostKey = push(child(ref(db), 'messages')).key;

    // Write the new message to the db.
    const updates = {};
    updates['/messages/' + newPostKey] = postData;

    return update(ref(db), updates);
}

export function fetchMessages() {
    let messages = []
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        messages.push(childSnapshot.val())
        });
    });
    return messages
}