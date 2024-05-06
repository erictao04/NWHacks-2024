import { Camera, CameraType, AutoFocus } from "expo-camera";
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
  TouchableOpacity,
} from "react-native";
import { useAuthState } from "react-firebase-hooks/auth";

import { uploadSellerClothes } from "../../utils/uploadImage";
import { auth } from "../../../config";
import parseImage from "../../utils/ImageRecognition";

export const CameraPage = () => {
  let cameraRef = useRef();
  const [user] = useAuthState(auth);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();
  const [cameraOn, setCameraOn] = useState(true);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
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
    let sendPic = async () => {
      alert("Your clothing has been uploaded!")
      setPhoto(undefined);
      parseImage("data:image/jpg;base64," + photo.base64)
        .then((description) => {
          console.log("in then 1");
          uploadSellerClothes(user.email, photo, description);
          console.log("in then 2");
        })
        .catch((e) => console.error("Error: ", e));
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />

        <Button title="Use Picture" color="black" onPress={sendPic} />
        <Button
          title="Retake"
          color="black"
          onPress={() => setPhoto(undefined)}
        />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef} autoFocus={AutoFocus.on}>
      <View style={styles.buttonContainer}></View>

      <SafeAreaView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={takePic}>
            <View style={styles.snapButton}></View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Camera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  confirmationcontainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  buttonContainer: {
    backgroundColor: "red",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  snapButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default CameraPage;
