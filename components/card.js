import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const PostBox = () => {
    return (
        <Card style={{ flex: 0 }}>
            <CardItem>
                <Left>
                    <Thumbnail source={require('../assets/logo.png')} />
                    <Body>
                        <Text>Mission and Strategy</Text>
                        <Text note>April 15, 2016</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Image source={require('../assets/adesina.png')} style={{ height: 200, width: 262, flex: 1 }} />
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit neque a ligula semper.
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
    )
}

export default PostBox