// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABdwZdExGfBfO7VMP1oQMVwBNBgTy55ro",
  authDomain: "half-marathon-countdown.firebaseapp.com",
  databaseURL: "https://half-marathon-countdown-default-rtdb.firebaseio.com",
  projectId: "half-marathon-countdown",
  storageBucket: "half-marathon-countdown.appspot.com",
  messagingSenderId: "274151739337",
  appId: "1:274151739337:web:8a0e0ae1d6f1dce487a218",
  measurementId: "G-QEDYN49L27"
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

function resolveMessages() {
    return new Promise(resolve => {
        resolve(fetchMessages())
    })
}

export async function readMessages() {
    return await resolveMessages()
}