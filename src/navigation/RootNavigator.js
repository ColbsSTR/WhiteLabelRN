import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';
import AuthStack from './AuthStack';
import { selectUser } from '../state/Selectors/User/SelectUserState';

export const RootNavigator = () => {
  const userState = useSelector(selectUser);
  return (
    <NavigationContainer>
      { userState ? (
        <Tabs />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};