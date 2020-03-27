import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import EditScreenOne from "../screens/Profile/EditScreenOne";
import EditScreenTwo from "../screens/Profile/EditScreenTwo";

const Stack = createStackNavigator();

export default function ProfileStackNavigator() {
  return (
      <Stack.Navigator initialRouteName="Profile" headerMode="none">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditScreenOne" component={EditScreenOne} />
        <Stack.Screen name="EditScreenTwo" component={EditScreenTwo} />
      </Stack.Navigator>
  );
}
