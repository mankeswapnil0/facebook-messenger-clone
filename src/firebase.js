import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGaXCioA7tmlvix-ObVlM9TFm3NkFjsi8",
    authDomain: "facebook-messenger-b635f.firebaseapp.com",
    databaseURL: "https://facebook-messenger-b635f.firebaseio.com",
    projectId: "facebook-messenger-b635f",
    storageBucket: "facebook-messenger-b635f.appspot.com",
    messagingSenderId: "329017700090",
    appId: "1:329017700090:web:ce4a64fd9813931dabe343",
    measurementId: "G-CDW6J9BE4D"
});

const db = firebaseApp.firestore();


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default db;