import React from 'react'
import { StackNavigator,SwitchNavigator,DrawerNavigator } from 'react-navigation'


import HomeScreen from '../Containers/HomeScreen'
import AudioScreen from '../Containers/AudioScreen'
import VideoScreen from '../Containers/VideoScreen'
import CarouselScreen from '../Containers/Carousel'

export default DrawerNavigator({
    Home:{screen:HomeScreen},
    Audio:{screen:AudioScreen},
    Video:{screen:VideoScreen},
    Carousel:{screen:CarouselScreen}
},{
    navigationOptions:{header:null}
})
