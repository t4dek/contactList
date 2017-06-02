import { AppRegistry } from 'react-native';
import Root from './src/root';
import UserListScreen from './src/components/userListScreen';
import App from './src/containers/app';
import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
  Home: { screen: Root }
});

AppRegistry.registerComponent('contactList', () => AppNavigator);
