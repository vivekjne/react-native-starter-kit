import React, { Component } from 'react';
import { Container, Button, Text,Content,Header } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
          <Header />
          <Content>
            <Button>
            <Text>
                Home!
            </Text>
            </Button>
        </Content>
      </Container>
    );
  }
}