import React from "react";
import { Header, Left, Right, Body, Title, Icon } from "native-base";
import { useNavigation } from '@react-navigation/native';

export default props => {
    const navigation = useNavigation();
    return(
      <Header>
        <Left>
          <Icon
            accessibilityRole="button"
            accessibilityLabel="loginButton"
            type="FontAwesome"
            name="bars"
            onPress={()=>navigation.openDrawer()} />
        </Left>
        <Body>
          <Title>Content</Title>
        </Body>
        <Right />
      </Header>
    )
}
