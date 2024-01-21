import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Jacket from "./jacket.jpg";

const Square = ({image}) => {
  const navigation = useNavigation(); // Initialize navigation

  const handleSquarePress = () => {
    navigation.navigate('Details'); // Navigate to 'Details' screen
  };

  return (
    <TouchableOpacity onPress={handleSquarePress}>
      <View style={styles.container}>
        <Image
        style={styles.square}
        source={Jacket}
      />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row wrap',
    backgroundColor: 'white',
    flex: 1,
  },
  square: {
    backgroundColor: '#AEDCAE',
    width: 180,
    height: 250,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },
});

export default Square;
