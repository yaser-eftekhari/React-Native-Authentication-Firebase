import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAh5_ryDGq1S1IcbWDQa_FO7rSyr-rXgxk',
      authDomain: 'authfirebase-6e582.firebaseapp.com',
      databaseURL: 'https://authfirebase-6e582.firebaseio.com',
      projectId: 'authfirebase-6e582',
      storageBucket: 'authfirebase-6e582.appspot.com',
      messagingSenderId: '493129127436'
    });

    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return <Button>Log out</Button>
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
