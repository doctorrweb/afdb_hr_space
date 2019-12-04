import React, { Component } from "react";
import { StyleSheet, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import HTML from "react-native-render-html"

import {
  Container,
  Fab,
  Content,
  Card,
  CardItem,
  H2,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View,
  Spinner
} from "native-base";

class BenefitsPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  static navigationOptions = {
    drawerLabel: "Benefits",
    drawerIcon: () => (
      <Ionicons
        //style={{ paddingLeft: 20 }}
        color="#fff"
        name="md-home"
        size={30}
      />
    )
  };

  render() {

    const { navigation } = this.props
    const uri = navigation.getParam("img", "default value")

    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <H2>
                    {JSON.stringify(
                      navigation.getParam("title", "default value")
                    )}
                  </H2>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {uri ? (
                  <Image
                    source={{
                      uri: `${uri}`
                    }}
                    style={{ height: 200, width: 330, flex: 1 }}
                  />
                ) : (
                  <Spinner color="green" />
                )}
                
                <HTML
                  html={navigation.getParam("content", "default value")}
                  //imagesMaxWidth={Dimensions.get("window").width}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <View style={{ flex: 1 }}>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: "#5067FF" }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}
            >
              <Icon name="share" color="#02983E" />
              <Button style={{ backgroundColor: "#34A34F" }}>
                <Icon name="logo-whatsapp" />
              </Button>
              <Button style={{ backgroundColor: "#3B5998" }}>
                <Icon name="logo-facebook" />
              </Button>
              <Button disabled style={{ backgroundColor: "#DD5144" }}>
                <Icon name="mail" />
              </Button>
            </Fab>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
})

export default BenefitsPost
