import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAh5_ryDGq1S1IcbWDQa_FO7rSyr-rXgxk',
      authDomain: 'authfirebase-6e582.firebaseapp.com',
      databaseURL: 'https://authfirebase-6e582.firebaseio.com',
      projectId: 'authfirebase-6e582',
      storageBucket: 'authfirebase-6e582.appspot.com',
      messagingSenderId: '493129127436'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
