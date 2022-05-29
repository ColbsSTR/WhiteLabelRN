import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanBarcode from '../screens/ScanBarcode/ScanBarcode';

const Stack = createNativeStackNavigator();

export default ScanBarcodeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScanBarcode" component={ScanBarcode} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};