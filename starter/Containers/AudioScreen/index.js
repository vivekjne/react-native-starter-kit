import React, { Component } from 'react';
import { Container, Button, Text,Content,Header } from 'native-base';
import { Dimensions } from 'react-native'
import VideoPlayer from 'react-native-video-controls';
const { width,height } = Dimensions.get('window')
export default class Audio extends Component {
  render() {
    return (
      <Container>
          <Header />
          <Content scrollEnabled={false} contentContainerStyle={{width,height:height*0.4}}>
        
            <VideoPlayer
                source={{ uri: 'https://archive.org/download/testmp3testfile/mpthreetest.mp3' }}
                navigator={ this.props.navigator }
            />
        </Content>
      </Container>
    );
  }
}