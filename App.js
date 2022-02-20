import 'react-native-gesture-handler';
import React from 'react'; 
import { Root } from "native-base";
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <RootNavigator />
  );
}