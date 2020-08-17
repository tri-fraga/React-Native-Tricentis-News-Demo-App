import * as React from 'react';
import { Button, View } from 'react-native';
import { Header, Left, Right, Body, Title, Icon } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Feed from "./Screen/Feed";
import Chat from "./Screen/Chat";
import Profile from "./Screen/Profile";
import Contents from "./Screen/Contents";
import Page from "./Screen/Page";
import Login from "./Screen/Login";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Feed} options={{
          drawerIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="home" style={{color: color}} />
            )
          }}/>
        <Drawer.Screen name="Chat" component={Chat} options={{
          drawerIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="comments" style={{color: color}} />
            )
          }} />
        <Drawer.Screen name="Profile" component={Profile} options={{
          drawerIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="user" style={{color: color}} />
            )
          }}/>
        <Drawer.Screen name="Contents" component={Contents} options={{
          drawerIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="list" style={{color: color}} />
            )
          }}/>
        <Drawer.Screen name="Page" component={Page} options={{
          drawerIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="file" style={{color: color}} />
            )
          }}/>
        <Drawer.Screen name="Login" component={Login} options={{
          drawerIcon: ({ color, size }) => (
            <Icon type="FontAwesome" name="sign-out" style={{color: color}} />
            )
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
