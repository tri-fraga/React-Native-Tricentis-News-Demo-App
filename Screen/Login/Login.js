import React, { Component, Fragment } from "react";
import { SafeAreaView, Linking} from "react-native";
import { Container, Content, Card, CardItem, Item, Input, Label, Icon, Form, Button, Text, Spinner } from "native-base";
import NavigationHeader from "../../AppNavigation/NavigationHeader";

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
          email: "",
          password: "",
          valid: false,
          loading: false
        }
    }

    handleLogon = () => {
      if(this.state.valid) {
        this.setState({loading:true})
        setTimeout(() => {
            this.setState({loading:false})
            this.props.navigation.navigate('Home')
        }, 5000);
      }
    }

    handleEmailInput = (email) => {
      this.setState({ email: email });
    }

    handlePasswordInput = (password) => {
      this.setState({
        password: password,
        valid: password != ""
      });
    }


    render() {
        return (
            <Fragment>
            <SafeAreaView/>

            <Container>
                <Content>
                    <Card style={{ borderColor: "green", borderWidth: 5, marginTop:30 }}>
                        <CardItem header style={{ backgroundColor: "green" }}>
                          <Text style={{ color: "white" }}>Login</Text>
                        </CardItem>
                        <Form style={{ padding: 5 }}>
                            <CardItem>
                              <Item floatingLabel last>
                                <Icon type="FontAwesome" name="user" />
                                <Label>Email</Label>
                                <Input accessibilityLabel="email" onChangeText={(email) => this.handleEmailInput(email)} />
                              </Item>
                            </CardItem>
                            <CardItem>
                              <Item floatingLabel last>
                                <Icon type="FontAwesome" name="lock" />
                                <Label>Password</Label>
                                <Input accessibilityLabel="password" secureTextEntry={true} onChangeText={(password) => this.handlePasswordInput(password)} />
                              </Item>
                            </CardItem>
                            <CardItem>
                                {
                                    !this.state.loading ?
                                    <Button
                                      accessibilityRole="button"
                                      accessibilityLabel="loginButton"
                                      accessibilityState={{disabled: !this.state.valid}}
                                      disabled={!this.state.valid}
                                      success={this.state.valid}
                                      block
                                      style={{ width: "100%", marginTop: 5 }}
                                      onPress={() => this.handleLogon()}>
                                      <Text>Login</Text>
                                    </Button>
                                    :
                                    <Spinner style={{ width: "100%", marginTop: 5, justifyContent:"center" }}/>
                                }
                            </CardItem>
                        </Form>
                        <CardItem footer>
                          <Text>Don't have account, sign up </Text>
                          <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://google.com')}>here</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
            </Fragment>
        )
    }
}

export default Login;
