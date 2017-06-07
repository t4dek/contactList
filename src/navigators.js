import React              from 'react';
import { StackNavigator } from 'react-navigation';

import UserListScreen from './components/userListScreen';
import Profile        from './components/profileScreen';
import Header         from './components/header';

export const AppNavigator = StackNavigator({
  Users: {
    screen: UserListScreen,
    navigationOptions: {
      header: <Header />
    },
  },
  Profile: {
    screen: Profile
  }
});
