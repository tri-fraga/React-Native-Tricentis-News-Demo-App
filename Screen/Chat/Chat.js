import React, {Component} from "react";
import { Card, CardItem, Left, Right, Icon, Title, Text, Body, Textarea, Input, Button, Container, Content, Header } from "native-base";
import NavigationHeader from "../../AppNavigation/NavigationHeader";

class Chat extends Component {
    render(){
        return(
          <Container>
            <NavigationHeader title="Chat"/>
            <Content>
              <Card style={{flex:0, marginBottom:50}}>
                  <CardItem>
                      <Icon type="FontAwesome" name="user-circle" />
                      <Body>
                          <Input multiline={true} placeholder="Share something...." style={{ borderColor: "green", width:"100%", borderWidth: 1, borderRadius: 5, padding: 25 }} />
                      </Body>
                  </CardItem>
                  <CardItem footer  style={{flex:1, justifyContent:"flex-end"}}>
                      <Button success style={{marginRight:20}}>
                        <Icon type="FontAwesome" name="upload" />
                      </Button>
                      <Button success><Icon name="send" /></Button>
                  </CardItem>
              </Card>
            </Content>
          </Container>
        )
    }
}

export default Chat;
