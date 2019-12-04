import React, { Component } from 'react';
import {
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Right,
    Button
} from 'native-base';
import { TouchableHighlight } from "react-native";

const PostItem = ({nav}) => {
    return (
        
        <TouchableHighlight onPress={() => nav.navigate('BenefitsPost')}>
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square style={{ height: 120, width: 157 }} source={require('../assets/adesina.png')} />
                </Left>
                <Body>
                    <Text>Sankhadeep</Text>
                    <Text note numberOfLines={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit neque a ligula semper.</Text>
                </Body>
            </ListItem>
        </TouchableHighlight>
    );
}


export default PostItem