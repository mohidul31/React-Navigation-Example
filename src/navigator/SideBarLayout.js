import React, { Component } from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
} from "native-base";
const routes = ["Home", "NewsTabNavigator", "ProfileStackNavigator"];
export default class SideBarLayout extends Component {
  render() {
    return (
      <Container>
        <Content>
           <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <List style={{marginTop:120}}>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text>Home</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate("NewsTabNavigator")}
            >
              <Text>News</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate("ProfileStackNavigator")}
            >
              <Text>Profile</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
