import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SideBarLayout from "./SideBarLayout";
import NewsTabNavigator from "./NewsTabNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

const drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    News: { screen: NewsTabNavigator },
    Profile: { screen: ProfileStackNavigator }
  },
  {
    contentComponent: props => <SideBarLayout {...props} />
  }
);
export default createAppContainer(drawer);
