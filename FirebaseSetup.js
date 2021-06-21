import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCB90cBjV4rBk8-a8SPS6iA5-WXSuug9-M',
  authDomain: 'otptest-8ba83.firebaseapp.com',
  projectId: 'otptest-8ba83',
  storageBucket: 'otptest-8ba83.appspot.com',
  messagingSenderId: '874948514579',
  appId: '1:874948514579:web:7c2be3f01cbb0be48900e6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return {firebase, auth};
};
