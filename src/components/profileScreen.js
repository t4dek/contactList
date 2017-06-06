import React, { Component, PropTypes } from 'react';

import { View, Text, StatusBar } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar
          barStyle='dark-content'
        />
        <Text>Hello WOrld</Text>
      </View>
    )
  }
}
