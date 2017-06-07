import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet
}                                      from 'react-native';

const propTypes = {
  user:    PropTypes.object.isRequired,
  onPress: PropTypes.func
};

class ProfileRow extends Component {
  render(){
    const { fullName, jobTitle, avatar } = this.props.user;
    return (
      <View>
        <TouchableHighlight
          onPress={ this.props.onPress }
        >
          <View style={ styles.container }>
            <Image
              style={ styles.image }
              source={ { uri: avatar } }
            />
            <View style={ styles.row }>
              <Text style={ styles.name }>
                { fullName }
              </Text>
              <Text style={ styles.posititon }>
                { jobTitle }
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'snow'
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 18,
    marginLeft: 10
  },
  row: {
    marginLeft: 10
  },
  name: {
    fontWeight: 'bold'
  },
  posititon: {
    fontSize: 11,
    fontWeight: '400'
  }
});

ProfileRow.propTypes = propTypes;

export default ProfileRow;
