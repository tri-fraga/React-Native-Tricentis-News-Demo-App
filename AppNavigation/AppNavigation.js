import React, {Component} from "react";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "native-base";

import SidebarHeader from "./SidebarHeader";
import NavigationHeader from "./NavigationHeader";

import Feed from "../Screen/Feed";
import Chat from "../Screen/Chat";
import Page from "../Screen/Page";
import Profile from "../Screen/Profile";
import Contents from "../Screen/Contents";
import Login from "../Screen/Login";

export default class AppNavigation extends Component {
    render() {
        return (
            <NavigationContainer />
        )
    }
}

const NavigationContainer = createAppContainer(createDrawerNavigator({
    Home: {
        screen: Feed,
        navigationOptions:{
            drawerIcon : <Icon type="FontAwesome" name="home" />
        }
    },
    Chat:{
        screen:Chat,
        navigationOptions:{
            drawerIcon:<Icon type="FontAwesome" name="comments" />
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            drawerIcon:<Icon type="FontAwesome" name="user" />
        }
    },
    Content:{
        screen:Contents,
        navigationOptions:{
            drawerIcon:<Icon type="FontAwesome" name="list" />
        }
    },
    Page:{
        screen:Page,
        navigationOptions:{
            drawerIcon:<Icon type="FontAwesome" name="file" />
        }
    },
    Logout:{
        screen:Login,
        navigationOptions:{
            drawerIcon:<Icon type="FontAwesome" name="sign-out" />
        }
    }
},
{
    drawerPosition: "left",
    contentComponent: SidebarHeader
}));
