import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ListView,
  Linking,
  TouchableHighlight
}                                      from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ds }        from '../utils';
import ProfileHeader from './profileHeader';
import Separator  from './separator';

class ProfileScreen extends Component {
  openLink(type){
    console.log(type);
    const { user } = this.props.navigation.state.params;
    let url;

    switch(type){
      case 'ios-text':
        url = `sms:${ user.cellphone }`
        break
      case 'ios-call':
        url = `skype:${ user.cellphone }`
        break
      case 'ios-mail':
        url = `mailto:${ user.elekseMail }`
        break
    }

    return Linking.canOpenURL(url).then(supported => {
      if(!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        Linking.openURL(url)
        .catch(err => {
          console.warn('openURL error', err)
        });
      }
    }).catch(err => console.warn('An unexpected error happened', err));
  }

  renderIcons(){
    const icons = ['ios-text', 'ios-call', 'ios-mail'];

    return icons.map(iconName => {
      return (
        <View
          style={ styles.test }
          key={ iconName }
        >
          <TouchableHighlight
            onPress={ this.openLink.bind(this, iconName) }
          >
            <Icon
              name={ iconName }
              size={ 24 }
              style={ styles.icon }
              color='white'
              backgroundColor='royalblue'
            />
          </TouchableHighlight>
        </View>
      );
    });
  }
  renderDetails(obj){
    let items = [];
    const labelMapper = {
      room:         'ROOM',
      elekseMail:   'EMAIL',
      cellphone:    'MOBILE',
      skype:        'SKYPE',
      carModelName: 'CAR'
    };
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        items.push(
          (<View key={ key }>
            <Text style={ styles.label }>
              { labelMapper[key] }
            </Text>
            <Text
              style={ styles.info }
              selectable
            >
              { obj[key] }
            </Text>
            <Separator />
          </View>)
        )
      }
    }
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
        <View style={ styles.profileContainer }>
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
            { this.renderIcons() }
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
    justifyContent: 'space-between',
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
    alignItems: 'center',
    flexBasis: '70%'
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    flexBasis: '30%',
    paddingTop: 5
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexBasis: '60%'
  },
  label: {
    paddingLeft: 15,
    fontSize: 10,
    marginBottom: 5,
    fontWeight: '100'
  },
  info: {
    fontSize: 15,
    paddingLeft: 15,
    fontWeight: '400'
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
  },
  icon: {
    backgroundColor: 'royalblue',
    textAlign: 'center',
    width: 30
  },
  test: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'royalblue',
    height: 40,
    width: 40,
    maxWidth: 40,
    borderRadius: 20
  }
});

export default ProfileScreen;
