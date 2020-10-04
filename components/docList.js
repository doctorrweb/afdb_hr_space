import React, { Component } from "react"
import {
  Linking,
    Text,
    TouchableHighlight,
} from "react-native"

import {
    ListItem,
    Icon,
    Button,
    Left,
    Body,
    Right
} from "native-base"

import { Ionicons } from "@expo/vector-icons"

//import Downloader from '../utils/download'

const DocList = (props) => {
/*
let downloadDoc = Downloader(
  props.data.title,
  props.data.link
)
*/
    return (
      <TouchableHighlight
        onPress={() => Downloader(props.data.title, props.data.link)}
      >
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#02983E" }}>
              <Icon active name="paper" />
            </Button>
          </Left>
          <Body>
            <Text>{props.data.title}</Text>
            <Text note>{props.data.lastUpdate}</Text>
          </Body>
          <Right>
            <Button 
              color="#02983E"
              onPress={() => Linking.openURL(props.data.link)}
              transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </TouchableHighlight>
    )
}


export default DocList
