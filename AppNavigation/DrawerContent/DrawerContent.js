import React, {Component} from "react";
import { Layout, Image } from "react-native";
import { Container, Header, Body, Text, Content } from "native-base";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"

export function DrawerContent(props) {
  return(
    <Container>
      <Header style={{height:120}}>
        <Body>
          <Image source={require('../../images/logo.png')} style={{width: 80, height: 100, resizeMode: "contain"}} />
        </Body>
      </Header>
      <Content>
      </Content>
    </Container>
  );
}
