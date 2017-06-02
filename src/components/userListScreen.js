import React, { Component, PropTypes } from 'react';
import { connect }          from 'react-redux';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHighligh
}                           from 'react-native';

import Header from './header';

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

  headerComp(props){
    console.log(props);
    return <Header />
  }

  static navigationOptions = {
    title: 'Contacts'
  }

  renderRow(rowData){
    return (
      <Text>
        { rowData.fullName }
      </Text>
    )
  }

  render(){
    return (
      <View>
        <ListView
          dataSource={ this.state.users }
          renderRow={ this.renderRow }
        />
      </View>
    )
  }

}

function mapStateToProps(state, nav){
  console.log(nav);
  const { users } = state;

  return { users };
}

UserListScreen.propTypes = propTypes;

export default connect(mapStateToProps)(UserListScreen);
