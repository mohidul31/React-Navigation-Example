import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import SideBarLayout from "./SideBarLayout";
import NewsTabNavigator from "./NewsTabNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideBarLayout {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="NewsTabNavigator" component={NewsTabNavigator} /> 
         <Drawer.Screen name="ProfileStackNavigator" component={ProfileStackNavigator} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
