// Create a new file: DetailsScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Jacket from "./jacket.jpg";

const DetailsScreen = () => (

  <SafeAreaView style={styles.container}>
    <View>
      <Image
        style={styles.preview}
        source={Jacket}
      />
    </View>
    <View style={styles.LogInBox}>
      <TouchableOpacity
        onPress={sendAlert}
      >
        <Text style={{color:"white", fontWeight:'600', fontSize:18}}>
          Purchase
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  
);

const sendAlert = () => {
  alert('ITem has been bought!')
}

const styles = StyleSheet.create({
  preview: {
    resizeMode: 'contain',
    height: 500
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogInBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', 
    marginTop: 6, 
    padding: 12,
    backgroundColor: '#8ED3AE',
    borderRadius: 10,
  },
})

export default DetailsScreen;
