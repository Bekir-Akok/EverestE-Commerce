import firebase from 'firebase/app';  
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDQ2G6MgEGTDzwYsfSAPdhED4Q0-FAmFHk",
    authDomain: "everest-e-commerce-app.firebaseapp.com",
    projectId: "everest-e-commerce-app",
    storageBucket: "everest-e-commerce-app.appspot.com",
    messagingSenderId: "422904443593",
    appId: "1:422904443593:web:f7041ccab95904555e5318",
    measurementId: "G-GHCB65J38X"
})

const auth = firebase.auth();

export { auth };