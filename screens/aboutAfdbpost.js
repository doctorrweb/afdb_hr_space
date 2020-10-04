import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
//import Post from '../components/post'
import { Row, Grid } from "react-native-easy-grid"
import { Container, Content, Card, CardItem, H2, Text, Button, Icon, Left, Body, View, Spinner } from 'native-base'
import { getAfDBPost } from '../data/benefits/benefitsApi'
import HTML from "react-native-render-html"

class AboutAfdbPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            isLoading: true,
            data: null,
            postId: ''
        };
    }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "About AfDB",
      headerStyle: {
        backgroundColor: "#e9e9e9"
      },
      headerTintColor: "#02983E",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  componentDidMount() {
    this.setState({
      postId: this.props.navigation.getParam("post", "default value")
    })
    console.log(this.state.postId)
    getAfDBPost(this.state.postId).then(
      data => {
        this.setState({
          isLoading: false,
          data
        });
      },
      error => {
        Alert.alert("Error Data loading")
      }
    );
  }


    render() {
      if (this.state.data) {
        this.state.data ?
          console.log(this.state.postId)
          : console.log('pas chargé')
        return (
          <Container>
            <Content>
              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <H2>{this.state.data[0].title.rendered}</H2>
                      <Text note>April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image
                      source={require("../assets/development.png")}
                      style={{ width: "100%" }}
                    />
                    <Text
                      style={{
                        textAlign: "justify",
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 30,
                        paddingBottom: 10
                      }}
                    >
                      The overarching objective of the African Development Bank (AfDB) Group is to spur sustainable economic development and social progress in its regional member countries (RMCs), thus contributing to poverty reduction.

The Bank Group achieves this objective by:

mobilizing and allocating resources for investment in RMCs; and
providing policy advice and technical assistance to support development efforts.
In 2015, all multilateral development institutions have agreed on a same set of objectives, called the Sustainable Development Goals. They are:

Sustainable Development Goals

Goal 1. End poverty in all its forms everywhere
Goal 2. End hunger, achieve food security and improved nutrition and promote sustainable agriculture
Goal 3. Ensure healthy lives and promote well-being for all at all ages
Goal 4. Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all
Goal 5. Achieve gender equality and empower all women and girls
Goal 6. Ensure availability and sustainable management of water and sanitation for all
Goal 7. Ensure access to affordable, reliable, sustainable and modern energy for all
Goal 8. Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all
Goal 9. Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation
Goal 10. Reduce inequality within and among countries
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        );
      } else {
        return <Spinner color="green" />
      }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        //backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
});

export default AboutAfdbPost