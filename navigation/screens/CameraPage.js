import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useRef, useState, useEffect } from "react";
import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { useAuthState } from "react-firebase-hooks/auth";

import SellScreen from "./SellScreen";
import { uploadSellerClothes } from "../../utils/uploadImage";
import { auth } from "../../config";

export const CameraPage = () => {
  let cameraRef = useRef();
  const [user] = useAuthState(auth);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [cameraOn, setCameraOn] = useState(true);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting for camera permissions</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>Camera permissions are turned off, please turn on in settings</Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sendPic = () => {
      uploadSellerClothes(user.email, photo, "chat gpt description");
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button title="Use Picture" onPress={sendPic} />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Retake" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  let exitCamera = async () => {
    setCameraOn(false);
  };

  if (!cameraOn) {
    return <SellScreen />;
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
        <Button title="Exit" onPress={exitCamera} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default CameraPage;
