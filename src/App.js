import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCUCG65FTRq4ku3BisNjJRSS6fCLaeukqk',
    authDomain: 'authentication-28002.firebaseapp.com',
    databaseURL: 'https://authentication-28002.firebaseio.com',
    storageBucket: 'authentication-28002.appspot.com',
    messagingSenderId: '573832545785'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
    <View>
    <Header headerText='Authentication' />
    <LoginForm />
    </View>
    );
  }
}

export default App;
