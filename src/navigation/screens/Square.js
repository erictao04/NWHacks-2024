import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Jacket from "./jacket.jpg";
import DetailsScreen from "./DetailsScreen"

const Square = ({ image }) => {
  const navigation = useNavigation(); // Initialize navigation

  const handleSquarePress = () => {
    navigation.navigate("Details", { closeUp: image }); // Navigate to 'Details' screen
  };
  // console.log(image.slice(37, 40));
  // console.log("data:image/jpg;base64," + image.slice(37, 50));

  return (
    <TouchableOpacity onPress={handleSquarePress}>
      <View style={styles.container}>
        <Image
          style={styles.square}
          source={image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row wrap",
    backgroundColor: "white",
    flex: 1,
  },
  square: {
    // backgroundColor: "#AEDCAE",
    width: 180,
    height: 250,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Square;
