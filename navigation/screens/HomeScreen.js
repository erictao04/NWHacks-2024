import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Square from "./Square";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config";
import Jacket from "./jacket.jpg";
import clothe1 from "./clothe1.jpg";
import clothe2 from "./clothe2.jpg";
import clothe3 from "./clothe3.jpg";
import clothe4 from "./clothe4.jpg";
import clothe5 from "./clothe5.jpg";


const Home = () => {
  const [user] = useAuthState(auth);
  const [images, setImages] = useState([])
  
  useEffect(() => {
    const array = [Jacket, clothe1, clothe2, clothe3, clothe4, clothe5 ]
    const keys = match(user.email)
    console.log(keys)
    setImages(array)
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy, Sell & Discover</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderSquare />
      </ScrollView>
    </View>
  );

  function RenderSquare() {
    var imageloop = [];
    for (let i = 0; i < 6; i++) {
      imageloop.push(
        <View key={i} style={styles.item}>
          <Square image={images[i]} />
        </View>
      );
    }
    console.log("render");

    return <View style={styles.boxContainer}>{imageloop}</View>;
  }
};

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



