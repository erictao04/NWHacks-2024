import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SellScreen';

//Screen names
const homeName = "Home";
const profileName = "Profile";
const sellName = "Sell";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === sellName) {
            iconName = focused ? 'pricetag' : 'pricetag-outline';
          }  else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';

            

          }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={sellName} component={SettingsScreen} />
        <Tab.Screen name={profileName} component={DetailsScreen} />
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;