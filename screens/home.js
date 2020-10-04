import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Header, Button } from "native-base"


class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Home",
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
    }
  }

  render() {
    return (
      <Grid style={{ backgroundColor: "#000" }}>
        <Header />
        <Row size={1} style={{ padding: 10 }}>
          <ImageBackground
            source={require("../assets/overview_afdb.png")}
            style={{ width: "100%", height: "100%", borderRadius: 30 }}
          >
            <View style={styles.container}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  fontFamily: "Futura",
                  color: "#ffffff",
                  paddingBottom: 10
                }}
              >
                Overview
              </Text>
              <Button
                bordered
                small
                style={{
                  borderColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 25,
                  paddingLeft: 25
                }}
                onPress={() => this.props.navigation.navigate("HRDirect")}
              >
                <Text style={{ color: "#fff" }}>View</Text>
              </Button>
            </View>
          </ImageBackground>
        </Row>
        <Row size={1}>
          <ImageBackground
            source={require("../assets/development.png")}
            style={{ width: "100%", height: "100%", borderRadius: 30 }}
          >
            <View style={styles.container}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  fontFamily: "Futura",
                  color: "#ffffff",
                  paddingBottom: 10
                }}
              >
                Mission & Strategy
              </Text>
              <Button
                bordered
                small
                style={{
                  borderColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 25,
                  paddingLeft: 25
                }}
                onPress={() => this.props.navigation.navigate("HRDirect")}
              >
                <Text style={{ color: "#fff" }}>View</Text>
              </Button>
            </View>
          </ImageBackground>
        </Row>
        <Row size={1}>
          <ImageBackground
            source={require("../assets/structure.png")}
            style={{ width: "100%", height: "100%", borderRadius: 30 }}
          >
            <View style={styles.container}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  fontFamily: "Futura",
                  color: "#ffffff",
                  paddingBottom: 10
                }}
              >
                Structure
              </Text>
              <Button
                bordered
                small
                style={{
                  borderColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 25,
                  paddingLeft: 25
                }}
                onPress={() => this.props.navigation.navigate("HRDirect")}
              >
                <Text style={{ color: "#fff" }}>View</Text>
              </Button>
            </View>
          </ImageBackground>
        </Row>
        <Row size={1}>
          <ImageBackground
            source={require("../assets/history.png")}
            style={{ width: "100%", height: "100%", borderRadius: 30 }}
          >
            <View style={styles.container}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  fontFamily: "Futura",
                  color: "#ffffff",
                  paddingBottom: 10
                }}
              >
                History
              </Text>
              <Button
                bordered
                small
                style={{
                  borderColor: "#fff",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 25,
                  paddingLeft: 25
                }}
                onPress={() => this.props.navigation.navigate("HRDirect")}
              >
                <Text style={{ color: "#fff" }}>View</Text>
              </Button>
            </View>
          </ImageBackground>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 100,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Home