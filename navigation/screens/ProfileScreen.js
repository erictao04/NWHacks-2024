import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SignOut } from "../../Auth.js";

import {
  ref as databaseRef,
  set,
  child,
  push,
  update,
  get,
} from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config.js";

const ProfileScreen = ({ navigation }) => {
  const [aiPart, setAIPart] = useState("");

  const [user] = useAuthState(auth);
  const username = user.email.slice(0, user.email.indexOf("@"));
  const postListRef = databaseRef(db, "buyerPreferences/" + username);

  const handleInputChange = (text) => {
    set(postListRef, {
      preferences: text,
    }).catch((e) => console.error(E));
    setAIPart(text);
  };
  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View style={styles.container}>
        {/* User Details */}
        <Text style={styles.title}>My Profile</Text>

        <View style={styles.profileDetails}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailValue}>{user.email}</Text>
        </View>

        {/* AI Part TextInput */}
        <View style={styles.aiInput}>
          <Text style={styles.detailLabel}>Input your fashion:</Text>
          <TextInput
            style={styles.aiPartInput}
            multiline
            numberOfLines={4}
            value={aiPart}
            onChangeText={(text) => handleInputChange(text)}
          />
        </View>

        {/* Sign Out Button */}
        <View style={styles.signOut}>
          <SignOut />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  profilePictureContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    justifyContent: "center",
  },
  profilePicture: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    alignSelf: "center",
  },
  profileDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },

  aiInput: {
    flexDirection: "column", // Changed from 'row' to 'column'
    marginBottom: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    height: 80, // Set a fixed height for the TextInput
    padding: 8,
  },
  detailLabel: {
    fontWeight: "bold",
    marginRight: 10,
    color: "#555",
  },
  detailValue: {
    fontSize: 16,
    color: "#333",
  },
  aiPartInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  signOut: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 6,
    padding: 12,
    backgroundColor: "#8ED3AE",
    borderRadius: 10,
  },
});

export default ProfileScreen;
