import React, {Component} from "react";
import { Container, View, Header, Content, Left, Right, Body, Title, Text, Icon, Button, Input } from "native-base";
import NavigationHeader from "../../AppNavigation/NavigationHeader";

class Page extends Component {
    render(){
        return(
            <Container>
                <NavigationHeader title="Page"/>
                <Content>
                    <View>
                        <Text>Buttons</Text>
                        <View>
                            <Button><Text>Just a Button</Text></Button>
                            <Button
                                testID={"AccButtonId"}
                                accessibilityLabel="Accessible Button Label"
                                accessibilityRole="button"
                                accessibilityValue={{text: 'Accessible Button Text'}}
                                ><Text>Accessible Button</Text></Button>
                        </View>
                        <View>
                            <Button disabled={true}><Text>Disabled Button</Text></Button>
                            <Button
                                disabled={true}
                                testId="accessibleButtonDisabledId"
                                accessibilityLabel="Accessible Button Disabled Label"
                                accessibilityRole="button"
                                accessibilityState={{disabled: true}}
                                accessibilityValue={{text: 'Accessible Disabled Button Text'}}
                                ><Text>Accessible Disabled Button</Text></Button>
                                <Button
                                disabled={true}
                                testId="accessibleButtonDisabledId2"
                                accessibilityLabel="Accessible Button Disabled Label 2 "
                                accessibilityRole="button"
                                accessibilityStates={['disabled']}
                                accessibilityValue={{text: 'Accessible Disabled Button Text 2'}}
                                ><Text>Accessible Disabled Button 2</Text></Button>
                        </View>
                        <Text>Buttons View</Text>
                        <View
                            disabled={true}
                            accessible={true}
                            testId="accessibleViewId"
                            accessibilityLabel="Accessible View Label"
                            accessibilityRole="button"
                            accessibilityValue={{text: 'Accessible View Text'}}
                            accessibilityState={{disabled: true}}>
                            <Button><Text>Accessible View</Text></Button>
                        </View>
                        <Text>TestID</Text>
                        <View>
                            <Button accessibilityRole="button" testID={"ButtonId"}><Text>Button with TestID</Text></Button>
                            <Button accessibilityRole="button" accessibilityValue={{text: 'Button Accesibility Value'}}><Text>Button with Value</Text></Button>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Page;
