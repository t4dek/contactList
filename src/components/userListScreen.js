import React, { Component, PropTypes } from 'react';
import { connect }          from 'react-redux';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  StatusBar,
  TouchableHighlight
}                           from 'react-native';

import { ds }     from '../utils';
import Header     from './header';
import ProfileRow from './profileRow';
import Separator  from './separator';

const propTypes = {
  users: PropTypes.object.isRequired
}

class UserListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: ds.cloneWithRows(props.users)
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.users) {
      this.setState({
        users: ds.cloneWithRows(nextProps.users)
      })
    }
  }

  renderRow(rowData){
    const { navigate, state } = this.props.navigation;
    return (
      <View>
        <ProfileRow
          user={ rowData }
          onPress={ () => navigate('Profile', { user: rowData }) }
        />
        <Separator />
      </View>
    )
  }

  render(){
    return (
      <View style={ { backgroundColor: 'snow' } }>
        <StatusBar
          barStyle='light-content'
        />
        <ListView
          dataSource={ this.state.users }
          renderRow={ this.renderRow.bind(this) }
        />
      </View>
    )
  }

}

function mapStateToProps(state, nav){
  const users = [
    {
      "fullName": "Tadeush Voichyshyn",
      "avatar": "https://lh6.googleusercontent.com/-AJFMmyY6iVA/AAAAAAAAAAI/AAAAAAAAAEg/vTKymQxxE-Y/photo.jpg",
      "jobTitle": "Software Engineer",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "Johny Cage",
      "avatar": "https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png",
      "jobTitle": "QA",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "Jim Beam",
      "avatar": "https://toparkservers.com/img/team/team-3.png",
      "jobTitle": "UI/UX",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "John Smith",
      "avatar": "https://userscontent2.emaze.com/images/cb047ed7-73e0-47c8-867b-a121827e6657/c4eedd19fd7a7606c50c5a94f3299514.png",
      "jobTitle": "Data Science",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "Jack White",
      "avatar": "https://gravatar.com/avatar/cd62d88a83461e0b1daa8f2fa31c4dcb?s=512&d=https://codepen.io/assets/avatars/user-avatar-512x512-6e240cf350d2f1cc07c2bed234c3a3bb5f1b237023c204c782622e80d6b212ba.png",
      "jobTitle": "Test Engineer",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
{
      "fullName": "Tyron Mathew",
      "avatar": "https://www.tm-town.com/assets/default_female300x300-af1ea9327d6293733a8874dbd97ce49e.png",
      "jobTitle": "Software Developer",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "Drew Brees",
      "avatar": "https://pbs.twimg.com/profile_images/1874767420/InteractiveAvatars-Martin-square.png",
      "jobTitle": "Senior Pomidor",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "Adrian Peterson",
      "avatar": "https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png",
      "jobTitle": "Test Automation Engineer",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "Payton Manning",
      "avatar": "https://pickaface.net/gallery/avatar/Opi51c74dfa1fef6.png",
      "jobTitle": "Trainee",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "Kung Lao",
      "avatar": "https://www.shareicon.net/data/2016/08/18/810223_user_512x512.png",
      "jobTitle": "Senior Data Science Engineer",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    },
    {
      "fullName": "Teddy Bridgewater",
      "avatar": "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png",
      "jobTitle": "Web Developer",
      "room": "530",
      "elekseMail": "tadeush.voichyshyn@eleks.com",
      "cellphone": "0935944526",
      "skype": "loka012",
      "carModelName": "Smart Fortwo"
    }
  ]

  return { users };
}

UserListScreen.propTypes = propTypes;

export default connect(mapStateToProps)(UserListScreen);
