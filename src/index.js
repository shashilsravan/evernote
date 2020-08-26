import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyDjsHbyqf81I8ADvRxgPbdXxREsnHFeQ3Q",
  authDomain: "evernote-clone-4da3f.firebaseapp.com",
  databaseURL: "https://evernote-clone-4da3f.firebaseio.com",
  projectId: "evernote-clone-4da3f",
  storageBucket: "evernote-clone-4da3f.appspot.com",
  messagingSenderId: "940402648238",
  appId: "1:940402648238:web:ed37b46fc77519df79393f",
  measurementId: "G-K7K702WW21"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
