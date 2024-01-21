// import React, { Component } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';

// export default class Square extends Component {
//   render() {
//     return (
//         <View style={styles.container}>
//           <View style={styles.square}  />
//           <View style={styles.square} />
//         </View>
     
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
    
//   },
//   square: {
//     backgroundColor: '#AEDCAE',
//     width: 180, // Adjust the width as needed
//     height: 250, // Adjust the height as needed
//     marginHorizontal: 10, // Adjust the spacing between squares
//     borderRadius: 15, // Optional: Add border radius for rounded corners
//     // borderWidth: 1, // Optional: Add border for a distinct look
//     // borderColor: '#AEDCAE', // Optional: Border color
//   },
// });

// Update Square.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Square = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleSquarePress = () => {
    navigation.navigate('Details'); // Navigate to 'Details' screen
  };

  return (
    <TouchableOpacity onPress={handleSquarePress}>
      <View style={styles.container}>
        <View style={styles.square} />
       
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  square: {
    backgroundColor: '#AEDCAE',
    width: 180,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 15,
  },
});

export default Square;
