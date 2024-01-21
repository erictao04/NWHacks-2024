import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Square from "./Square";


const Home = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
  <View style={styles.container}>
    <View style={styles.item}>
    <Square ></Square>
    <Square ></Square>

    </View>
    
    {/* <View style={styles.square}>
    <Square ></Square>
    <Square ></Square>
    <Square ></Square>
    <Square ></Square> 
    </View> */}
  </View> 
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
   
  },
   square: {

   }
 
});
export default Home;



