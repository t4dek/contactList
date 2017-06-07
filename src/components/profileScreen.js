import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ListView,
  TouchableHighlight
}                                      from 'react-native';

import { ds }        from '../utils';
import ProfileHeader from './profileHeader';
import Separator  from './separator';

const propTypes = {
  user: PropTypes.object.isRequired
}

class ProfileScreen extends Component {
  renderDetails(obj){
    let items = [];
    const labelMapper = {
      room:         'room',
      elekseMail:   'email',
      cellphone:    'mobile',
      skype:        'skype',
      carModelName: 'car'
    };
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        items.push(
          (<View>
            <Text style={ styles.label }>
              { labelMapper[key] }
            </Text>
            <Text style={ styles.info }>
              { obj[key] }
            </Text>
            <Separator />
          </View>)
        )
      }
    }
    console.log(items);
    return items;
  }

  render() {
    const { user } = this.props.navigation.state.params;
    const {
      fullName,
      jobTitle,
      avatar,
      ...rest
    } = user;

    return (
      <View style={ styles.mainContainer }>
        <StatusBar
          barStyle='dark-content'
        />
        <View style={ styles.profileContainer}>
          <View style={ styles.profile }>
            <Image
              style={ styles.image }
              source={ { uri: avatar } }
            />
            <View style={ styles.userInfo }>
              <Text style={ styles.name }>
                { fullName }
              </Text>
              <Text style={ styles.position }>
                { jobTitle }
              </Text>
            </View>
          </View>
          <View style={ styles.actions }>
            <Text>
              Here will be action buttons
            </Text>
          </View>
        </View>
        <View style={ styles.infoContainer }>
          { this.renderDetails(rest) }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexBasis: '40%',
    backgroundColor: '#EDECF0'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actions: {
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexBasis: '60%'
  },
  label: {
    fontWeight: 'bold',
    paddingLeft: 15
  },
  info: {
    paddingLeft: 15
  },
  userInfo: {
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
  position: {
    fontWeight: '400',
    fontSize: 12
  }
});

ProfileScreen.propTypes = propTypes;

export default ProfileScreen;
