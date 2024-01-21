import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { CameraPage } from './CameraPage'
import { useState } from 'react';
// import ImageRecognition from '../../ImageRecognition';

export default function SellScreen({ navigation }) {
  const [cameraOn, setCameraOn] = useState(false);

  if (cameraOn) {
    return <CameraPage />;
  }
  const launchCamera = () => {
    setCameraOn(true);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Sell" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Sell
      </Text>

      <Button onPress={launchCamera} title="Take pic" />
    </View>
  );
}
