import { ListView } from 'react-native';

export const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
