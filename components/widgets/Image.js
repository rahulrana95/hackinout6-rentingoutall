import React, {Component} from 'react';
import {Image} from 'react-native';
import {Container} from 'native-base';

class Images extends Component {
  render() {
    return (
      <Container>
        <Image source={require('../../assets/images/coder.jpeg')} />
      </Container>
    );
  }
}

export default Images;
