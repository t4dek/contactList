import React, { Component } from 'react';
import { View }             from 'react-native';
import UserListScreen       from '../components/userListScreen';

export default class App extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View>
        <UserListScreen />
      </View>
    );
  }
}
