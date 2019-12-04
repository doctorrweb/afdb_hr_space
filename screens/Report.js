import React, { Component } from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from "react-native";

import { SwipeableFlatList } from "react-native-swipeable-flat-list";
import { ListItem, Icon, Button } from "native-base";

class Report extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Reports and Statistics",
      headerStyle: {
        backgroundColor: "#e9e9e9"
      },
      headerTintColor: "#02983E",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  };


  render() {


    const data = [
      { key: 1, label: "Label 1", leftLabel: "Left 1", rightLabel: "Right 1" },
      { key: 2, label: "Label 2", leftLabel: "Left 2", rightLabel: "Right 2" },
      { key: 3, label: "Label 3", leftLabel: "Left 3", rightLabel: "Right 3" },
      { key: 4, label: "Label 4", leftLabel: "Left 4", rightLabel: "Right 4" },
      { key: 5, label: "Label 5", leftLabel: "Left 5", rightLabel: "Right 5" }
    ]


    return (
      <SwipeableFlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ height: 48 }}>
            <ListItem>
              <Text>{item.label}</Text>
            </ListItem>
          </TouchableOpacity>
        )}
        renderLeft={({ item }) => (
          <Text style={{ width: 40 }}>{item.leftLabel}</Text>
        )}
        renderRight={({ item }) => (
          <Text style={{ width: 100 }}>{item.rightLabel}</Text>
        )}
        backgroundColor={"white"}
      />
    );
  }
}

export default Report
