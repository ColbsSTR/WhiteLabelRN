import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

export default function Home() {
  // const [car, setCar] = useState({});

  // await firestore().collection('cars').doc('porsche').get().then(doc => setCar(doc.data()));

  // if (car === {}) return <ActivityIndicator />;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Car Year:
      </Text>
    </View>
  );
};
