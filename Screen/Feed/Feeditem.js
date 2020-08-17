import React from "react";
import {Layout, Image} from "react-native";
import {Card, CardItem, Text, Left, Right, Icon, Thumbnail, Button, Body} from "native-base";

export default props => {
    return(
        <Card style={{flex:0}}>
          <CardItem bordered>
              <Left>
                  <Thumbnail source={props.thumb} />
                  <Body>
                    <Text>Tricentis</Text>
                    <Text note>2 days ago</Text>
                  </Body>
              </Left>
              <Right>
                  <Button transparent>
                    <Icon type="FontAwesome" name="ellipsis-h" />
                  </Button>
              </Right>
          </CardItem>
          <CardItem cardBody bordered>
              <Body>
                  {
                      props.image && <Image source={props.image} style={{width: "100%", resizeMode: "contain", height: undefined, aspectRatio: 1, marginBottom:10}} />
                  }
              <Text style={{padding:10}}>{props.text}</Text>
              </Body>
          </CardItem>
          <CardItem footer>
              <Left>
                <Button transparent>
                  <Icon type="FontAwesome" name="thumbs-up"/>
                </Button>
                <Button transparent>
                  <Icon type="FontAwesome" name="thumbs-down"/>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Text>2 comments</Text>
                </Button>
              </Right>
          </CardItem>
      </Card>
    )
}
