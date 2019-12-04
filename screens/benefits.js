import React, { Component } from "react";
import { StyleSheet, ImageBackground, TouchableHighlight, Image, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PostListCard from "../containers/cardlist";
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Card, CardItem, H2, Text, Button, Icon, Left, Body, View, Spinner, List } from 'native-base'
import { getBenefitPosts } from '../data/benefits/benefitsApi'

class Benefits extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      data: null
    }
  }

  componentDidMount() {
    getBenefitPosts().then(
      data => {
        this.setState({
          isLoading: false,
          data
        });
      },
      error => {
        Alert.alert("Error Data loading");
      }
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Benefits",
      headerStyle: {
        backgroundColor: "#e9e9e9"
      },
      headerTintColor: "#02983E",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: () => (
        <Ionicons
          style={{ paddingLeft: 20 }}
          color="#02983E"
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      )
    };
  };

  render() {
    console.log(this.state.data)
    return this.state.data ? (
      <List
        dataArray={this.state.data}
        renderRow={(item, index) => (
          <PostListCard data={item} nav={this.props.navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    ) : (
      <Spinner color="green" />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});

export default Benefits;
