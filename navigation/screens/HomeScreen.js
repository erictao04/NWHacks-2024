import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Square from "./Square";


const Home = () => (
<View style={styles.container}>
    <Text style={styles.title}>Buy, Sell & Discover</Text>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.item}>
        <Square />
        <Square />
      </View>

      <View style={styles.item}>
        <Square />
        <Square />
      </View>

      <View style={styles.item}>
        <Square />
        <Square />
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'col',
    flexWrap: 'wrap',
    alignItems: 'stretch', // if you want to fill rows left to right
    backgroundColor: 'white',
  },
  item: {
    width: '50%', // is 50% of container width
    flexDirection: 'row',
    marginTop: 10,
    background: 'white'
    
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'white',
    textAlign: 'left',
    paddingLeft: 14,
    paddingBottom: 10,
    paddingVertical: 10,
    
    
  },
   
});
export default Home;



