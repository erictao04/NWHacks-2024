import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Square = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleSquarePress = () => {
    navigation.navigate('Details'); // Navigate to 'Details' screen
  };

  return (
    <>
    <TouchableOpacity onPress={handleSquarePress}>
      <View style={styles.container}>
        <View style={styles.square} />
      </View>
    </TouchableOpacity>

    </>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
  },
  square: {
    backgroundColor: '#AEDCAE',
    width: 195,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 15,
  },
});

export default Square;
