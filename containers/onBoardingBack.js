import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableHighlight
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Header, Button } from "native-base";

class OnBoardingBack extends Component {

  render() {
    return (
      <Grid style={{ backgroundColor: "#000" }}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("AboutAfdbPost")}
        >
          <Row size={1} style={{ padding: 10, height: 200 }}>
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
                  onPress={() =>
                    this.props.navigation.navigate("AboutAfdbPost")
                  }
                >
                  <Text style={{ color: "#fff" }}>View</Text>
                </Button>
              </View>
            </ImageBackground>
          </Row>
        </TouchableHighlight>
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
});

export default OnBoardingBack
