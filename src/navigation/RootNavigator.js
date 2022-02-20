import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};