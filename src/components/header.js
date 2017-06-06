import React, { Component } from 'react';

import {
  TextInput,
  View,
  Image,
  StyleSheet
}                           from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchRequest: ''
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image
          style={ styles.image }
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <TextInput
          style={ styles.searchInput }
          placeholder='Type user name to search'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 80,
    backgroundColor: 'royalblue'
  },
  searchInput: {
    textAlign: 'center',
    alignSelf: 'center',
    flexBasis: '80%',
    height: 35,
    backgroundColor: 'snow',
    borderRadius: 5
  },
  image: {
    alignSelf: 'center',
    flexBasis: '10%',
    width: 35,
    height: 35,
    borderRadius: 18
  }
});
