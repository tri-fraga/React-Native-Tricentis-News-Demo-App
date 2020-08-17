import React, {Component}  from "react";
import { Container, Content, Header, Icon, Body, Left, Right, Title } from "native-base";
import Feeditem from "./Feeditem";
import NavigationHeader from "../../AppNavigation/NavigationHeader";

class Feed extends Component {
    render(){
        return(
          <Container>
            <NavigationHeader title="Feed"/>
            <Content>
              <Feeditem
                  text="We help you the find the highest risk areas of your application through an easy, lightweight method for prioritizing requirements based on frequency and damage classes. Using Risk Coverage Optimization, you can execute the most important functional and API test cases first, enabling you to detect bugs within your critical requirements much earlier. "
                  thumb={require('../../images/avatar1.png')}
                  image={require('../../images/feed2.png')}
              />
              <Feeditem
                  text="Tricentis Tosca, the #1 Continuous Testing platform, accelerates testing with a script-less, no-code approach for end-to-end test automation. With support for over 160+ technologies and enterprise applications, Tosca provides resilient test automation for any use case."
                  thumb={require('../../images/avatar1.png')}
                  image={require('../../images/feed1.png')}
              />
              <Feeditem
                  text="Most script-based test automation tools create brittle test cases that require burdensome and costly maintenance cycles. Tricentis MBTA (Model-based Test Automation) is the only automation approach in the marketplace that provides rapid creation of resilient tests that can be easily maintained. This allows our customers to achieve test automation rates of 90% from release to release."
                  thumb={require('../../images/avatar1.png')}
                  image={null}
              />
              <Feeditem
                  text={null}
                  thumb={require('../../images/avatar1.png')}
                  image={require('../../images/avatar1.png')}
              />
            </Content>
          </Container>
        )
    }
}

export default Feed;
