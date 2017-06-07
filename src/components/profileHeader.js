import React, { Component, PropTypes } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet
}                                      from 'react-native';

const propTypes = {
  user: PropTypes.object.isRequired
}

class ProfileHeader extends Component {

  render() {
    const {
      fullName,
      jobTitle,
      avatar
    } = this.props.user;
    return (
      <View style={ styles.container }>
        <View>
          <View style={ styles.profile }>
            <Image
              style={ styles.image }
              source={ { uri: avatar } }
            />
            <View>
              <Text style={ styles.name }>
                { fullName }
              </Text>
              <Text style={ styles.position }>
                { jobTitle }
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={ styles.actions }>
            <Text>
              Here will be action buttons
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

ProfileHeader.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  profile: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actions: {
  }
});

export default ProfileHeader;
