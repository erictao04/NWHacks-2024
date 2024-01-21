import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/ProfileScreen";
import CameraPage from "./screens/CameraPage";

import Auth from "../Auth";
import { auth } from "../config";

//Screen names
const homeName = "Home";
const profileName = "Profile";
const sellName = "Sell";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 80 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === sellName) {
            iconName = focused ? "camera" : "camera-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#8ED3AE",
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 10, marginTop: -10 },
      }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={sellName} component={CameraPage} options={{ headerShown:false }} />
      <Tab.Screen name={profileName} component={DetailsScreen} />
    </Tab.Navigator>
  );
}

function MainContainer() {
  const [user] = useAuthState(auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: true, title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;