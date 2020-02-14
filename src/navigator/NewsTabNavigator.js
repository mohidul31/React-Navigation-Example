import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";
import TechNewsScreen from "../screens/News/TechNewsScreen";
import SportsNewsScreen from "../screens/News/SportsNewsScreen";

const newsTabs = createBottomTabNavigator(
  {
    TechNews: { screen: props => <TechNewsScreen {...props} /> },
    SportsNews: { screen: props => <SportsNewsScreen {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate("TechNews")}
            >
              <Icon name="home" type="FontAwesome" />
              <Text>Tech News</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("SportsNews")}
            >
              <Icon name="gamepad" type="FontAwesome" />
              <Text>Sports News</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);
export default newsTabs;
