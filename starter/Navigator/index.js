import React from 'react'
import { StackNavigator,SwitchNavigator,DrawerNavigator } from 'react-navigation'


import HomeScreen from '../Containers/HomeScreen'
import AudioScreen from '../Containers/AudioScreen'
import VideoScreen from '../Containers/VideoScreen'


export default DrawerNavigator({
    Home:{screen:HomeScreen},
    Audio:{screen:AudioScreen},
    Video:{screen:VideoScreen}
},{
    navigationOptions:{header:null}
})
