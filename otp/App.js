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
import SmsListener from 'react-native-android-sms-listener'
import CodeInput from 'react-native-confirmation-code-input';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state={
    otp:''
  }
  componentDidMount=()=>{
    // console.log(this.refs.codeInputRef1.codeInputRefs[0].setNativeProps({'text':'1'}))
    // this.refs.codeInputRef1
    SmsListener.addListener(message => {
      let code = message.body.split(' ')[0]
      for(i=0;i<this.refs.codeInputRef1.codeInputRefs.length;i++){

        this.refs.codeInputRef1.codeInputRefs[i].setNativeProps({'text':code.split('')[i]})
      }
      console.info(message)
      console.log(message)
      if(message.originatingAddress=='+917012831903'){

      }
    })
  }

  _onFulfill=(code)=>{
    console.log(code)
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
         <CodeInput
      ref="codeInputRef1"
      codeLength={4}
      className={'border-b'}
      space={10}
      size={50}
      inputPosition='left'
      onFulfill={(code) => this._onFulfill(code)}
    />
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
