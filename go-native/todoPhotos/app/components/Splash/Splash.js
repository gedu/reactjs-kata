import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SplashStyle from './SplashStyle';

export default class Splash extends Component {

  render() {
    return (
      <View style={SplashStyle.container}>

        <Text> HOLA EDU </Text>

      </View>
    );
  };

}
