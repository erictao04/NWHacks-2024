// import * as React from 'react';
// import { View, Text, Image, StylSheet} from 'react-native';


// const home =() => {
//     return (
//         <>
//         <View>
//             <Text style={{fontSize: 20, fontWeight: 700, color: 'green'}}>Products</Text>
//         </View>  
      
//         {/* <View style={styles.container}>
//           <Image
//           style = {styles.image}
//           source={require('./blueShirt.JPG')}/>
//          </View> */}

//          <View>
//           <Text>Hi</Text>
//          </View>
//         </>
//     )
// }




import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const home = () => (
  <View style={styles.container}>
   
    <Text style={styles.title}>Clothes 1:</Text>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});






export default home;
