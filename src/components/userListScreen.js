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
  const { users } = state;

  return { users };
}

UserListScreen.propTypes = propTypes;

export default connect(mapStateToProps)(UserListScreen);
