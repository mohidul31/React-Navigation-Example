import * as React from "react";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TechNewsScreen from "../screens/News/TechNewsScreen";
import SportsNewsScreen from "../screens/News/SportsNewsScreen";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, navigation }) {
  return (
    <Footer>
      <FooterTab>
        <Button
          vertical
          active={state.index === 0}
          onPress={() => navigation.navigate("TechNews")}
        >
          <Icon name="home" type="FontAwesome" />
          <Text>Tech News</Text>
        </Button>
        <Button
          vertical
          active={state.index === 1}
          onPress={() => navigation.navigate("SportsNews")}
        >
          <Icon name="gamepad" type="FontAwesome" />
          <Text>Sports News</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

export default function NewsTabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="TechNews" component={TechNewsScreen} />
      <Tab.Screen name="SportsNews" component={SportsNewsScreen} />
    </Tab.Navigator>
  );
}
