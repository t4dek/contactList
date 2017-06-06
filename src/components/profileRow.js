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
              <Text>
                { fullName }
              </Text>
              <Text>
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
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'snow'
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 34,
    flexBasis: '15%',
    marginLeft: 15
  },
  row: {
    flexBasis: '80%',
    alignItems: 'center'
  }
});

ProfileRow.propTypes = propTypes;

export default ProfileRow;
