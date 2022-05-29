import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ScanBarcodeStack from './ScanBarcodeStack';

const Tab = createBottomTabNavigator();

export const getTabBarLabel = (routeName) => {
  return {
    Home: 'Home',
    ScanBarcode: 'Scan Barcode',
    Profile: 'Profile',
  }[routeName];
};

export const getTabBarIcon = (routeName) => {
  return {
    Home: 'home',
    ScanBarcode: 'barcode',
    Profile: 'user',
  }[routeName];
};

export default Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabel: getTabBarLabel(route.name),
          tabBarIcon: ({color}) => {
            return (
              <Icon
                name={getTabBarIcon(route.name)}
                type="font-awesome-5"
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="ScanBarcode" component={ScanBarcodeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    );
  }