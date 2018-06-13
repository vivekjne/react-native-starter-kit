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
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';

import FBSDK,{LoginManager} from 'react-native-fbsdk'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  fb_login=()=>{
    console.log("hello")
    LoginManager.logInWithReadPermissions(['public_profile'])
        .then((result)=>{
          if(result.isCancelled){
            console.log('Cancelled by  user')
          }else{
            console.log('Login was a success' + result.grantedPermissions.toString())
          }
        }).catch(err=>{
          console.log(err)
        })
  }

  google_login=async()=>{
    await GoogleSignIn.configure({
      clientID: '765468244183-8a6648u74352r2i8luck84o8b7gqalrh.apps.googleusercontent.com',
      scopes: ['openid', 'email', 'profile'],
      shouldFetchBasicProfile: true,
    });

    const user = await GoogleSignIn.signInPromise();
    setTimeout(() => {
     Alert.alert('user',JSON.stringify(user))
}, 1500);
  }
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity 
       style={{backgroundColor:'blue',padding:20}}
       onPress={this.fb_login}>
         <Text style={{color:'#fff'}}>Login with facebook</Text>
       </TouchableOpacity>

         <TouchableOpacity 
       style={{backgroundColor:'red',padding:20,marginTop:20}}
       onPress={this.google_login}>
         <Text style={{color:'#fff'}}>Login with Google</Text>
       </TouchableOpacity>
      </View>
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
