import React, { Component } from 'react';

import {
  TextInput,
  View,
  Image
}                           from 'react-native';

export default class Header extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      searchRequest: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='Type user name to search'
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
      </View>
    )
  }
}
