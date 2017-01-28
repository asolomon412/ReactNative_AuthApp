import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component{
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCUCG65FTRq4ku3BisNjJRSS6fCLaeukqk',
    authDomain: 'authentication-28002.firebaseapp.com',
    databaseURL: 'https://authentication-28002.firebaseio.com',
    storageBucket: 'authentication-28002.appspot.com',
    messagingSenderId: '573832545785'
    });
  }

  render() {
    return (
    <View>
    <Header headerText='Authentication' />
    <Text>An App!</Text>
    </View>
  );
  }
}

export default App;
