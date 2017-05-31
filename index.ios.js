import { AppRegistry } from 'react-native';
import Root from './src/root';
import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
  Home: { screen: Root },
});

AppRegistry.registerComponent('contactList', () => AppNavigator);
