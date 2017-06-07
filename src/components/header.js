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
          style={ [ styles.image, styles.content ] }
          source={{uri: 'https://openclipart.org/image/2400px/svg_to_png/215819/Linux-Avatar.png'}}
        />
        <View>
          <TextInput
            style={ [ styles.searchInput, styles.content ] }
            placeholder='Search contact'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    maxHeight: 64,
    backgroundColor: 'royalblue'
  },
  searchInput: {
    width: 240,
    height: 28,
    backgroundColor: 'snow',
    borderRadius: 5,
    fontSize: 14,
    paddingLeft: 10
  },
  content: {
    marginBottom: 8
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 15
  }
});
