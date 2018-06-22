import React, { Component } from 'react';
import { Container, Button, Text,Content,Header,View } from 'native-base';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import { Dimensions,Image,TouchableOpacity } from 'react-native' 

const { width,height } = Dimensions.get('window')

export default class Home extends Component {
    state={
        entries:[
            'https://wallpapercave.com/wp/NoSiRIU.jpg',
            'https://wallpapercave.com/wp/qsuoWGU.jpg',
            'https://wallpapercave.com/wp/GBQcQYW.jpg'
        ],
        activeTab:0
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              renderDots={(activeIndex)=>(
                  this.state.entries.map((item,i)=>(
                    <TouchableOpacity
                    key={i}
                    onPress={()=>{
                        this._carousel.snapToItem(this._carousel._getPositionIndex(i))
                    }} style={{marginHorizontal:10}}>
                     <Image source={{uri:item}} style={{width:100,height:100,opacity:activeIndex==i?1:0.6}} />
                    </TouchableOpacity>
                  ))
                 
              )}
              activeDotIndex={ this.state.activeTab }
              tappableDots={ !!this._carousel }
              carouselRef={ this._carousel }
            />
        );
    }

    _renderItem ({item, index}) {
        console.log(item)
        return (
                <View>
                <Image source={{uri:item}} style={{width,height:height*0.5,resizeMode:'cover'}} />
            </View>
        );
    }
  render() {
    return (
      <Container>
          <Header />
         <Content>
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width}
              onSnapToItem={ i => this.setState({ activeTab : i }) }
            />
           { this.pagination }
           </Content>
      </Container>
    );
  }
}