import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBQGqBIkMCj-_JKbYtCp5EUGDEatiOTfsQ",
  authDomain: "socialpage-73c8d.firebaseapp.com",
  databaseURL: "https://socialpage-73c8d-default-rtdb.firebaseio.com",
  projectId: "socialpage-73c8d",
  storageBucket: "socialpage-73c8d.appspot.com",
  messagingSenderId: "488443466029",
  appId: "1:488443466029:web:de510d89f8616792bec3a4",
  measurementId: "G-966N51VN10"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
messaging.getToken({vapidKey:"BAznTFN2YongeCmjBb2CiYgaTx7H4iJ9be7-frYAlazr1lY8KUErTP-rE0qbuKjN3sCxuPYWgahryAGwCbRj_Yo"})
.then((currentToken) => {
  if (currentToken) {
    console.log('Token recieved... Notifications Enabled')
    return messaging.getToken()
  } else {
    console.log('No registration token available. Request permission to generate one.')
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();