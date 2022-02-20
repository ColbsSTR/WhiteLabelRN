import 'react-native-gesture-handler';
import React from 'react'; 
import { Provider } from 'react-redux';
import appStore from './src/state/Reducers/index';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <Provider store={ appStore }>
      <RootNavigator />
    </Provider>
  );
}