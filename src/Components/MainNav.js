import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../Screens/Home";
import { Favourites } from "../Screens/Favourites";
import { Details } from "../Screens/Details";
const Stack = createStackNavigator();

export const MainNav = ({ navgation, route }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
