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

import Header from './header';
import ProfileRow from './profileRow';

const propTypes = {
  users: PropTypes.object.isRequired
}

class UserListScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    this.state = {
      users: ds.cloneWithRows(props.users)
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.users) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        users: ds.cloneWithRows(nextProps.users)
      })
    }
  }

  renderRow(rowData){
    const { navigate } = this.props.navigation;
    return (
      <ProfileRow
        user={ rowData }
        onPress={ () => navigate('Profile') }
      />
    )
  }

  render(){
    return (
      <View>
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
  const { users } = state;

  return { users };
}

UserListScreen.propTypes = propTypes;

export default connect(mapStateToProps)(UserListScreen);
