import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class NotificationDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Notification Detail",
      headerStyle: {
        backgroundColor: "#e9e9e9"
      },
      headerTintColor: "#02983E",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Notification Deatil screen !</Text>
        <Button
          title="Contact"
          onPress={() => this.props.navigation.navigate("HRDirect")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default NotificationDetail
