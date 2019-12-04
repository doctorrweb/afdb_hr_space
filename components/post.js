/*
import React from 'react';
import {
    Container,
    Content,
    List,
    Image
} from 'native-base';
import { Row, Grid } from "react-native-easy-grid";


const Post = () => {
    return (
        <Grid>
            <Row size={65}>
                <Image source={require('../assets/adesina.png')} style={{ height: 200, width: 262 }} />
            </Row>
            <Row size={35}></Row>
        </Grid>
    )
}



export default Post

//<Image source={require('../assets/adesina.png')} style={{ height: 200, width: 262 }} />
*/

import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base'
export default class Post extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../assets/adesina.png')} style={{ width: '100%' }} />
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
