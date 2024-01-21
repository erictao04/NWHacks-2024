import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Square from "./Square";
import { useState, useEffect } from "react";
import { getImages } from "../../utils/getImages"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config'


const Home = () => {
  const [user] = useAuthState(auth);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getImages(user.email));
    console.log(images)
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy, Sell & Discover</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderSquare />
      </ScrollView>
    </View>
  )

  function RenderSquare(){
    var imageloop = []
    for (let i=0; i < images.length; i++) {
      imageloop.push(
        <View style={styles.item}>
          <Square image={images[i]}/>
        </View>
      )
    }
    return (
      <View style={styles.boxContainer}>
        {imageloop}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'col',
    flexWrap: 'wrap',
    alignItems: 'stretch', // if you want to fill rows left to right
    backgroundColor: 'white',
  },
  boxContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  item: {    
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



