/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'react-native-firebase'
import Navigator from './Navigator'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
console.disableYellowBox = true
export default class App extends Component<Props> {

  componentDidMount=async()=>{
    const enabled = await firebase.messaging().hasPermission();
if (enabled) {
    // user has permissions
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
        // user has a device token
        this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken=> {
          // Process your token as required
      });

      await firebase.messaging().subscribeToTopic('test')

      this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
        console.log(notification);
        
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      console.log(notification);
      


      // Process your notification as required
    });

    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      console.log(action)
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;
      console.log(notification)
  });
      this.messageListener = firebase.messaging().onMessage((message) => {
        // Process your message as required
        console.log(message);
    });
    } else {
        // user doesn't have a device token yet
    }
} else {
    // user doesn't have permission

    try {
      await firebase.messaging().requestPermission();
      // User has authorised
  } catch (error) {
      // User has rejected permissions
  }
}

  }
  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
