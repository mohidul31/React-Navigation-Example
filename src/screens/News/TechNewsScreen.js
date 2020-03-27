import React, { Component } from "react";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
} from "native-base";

export default class TechNewsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Tech News</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Welcome to Tech News Screen</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
