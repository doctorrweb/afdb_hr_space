import React, { Component } from 'react';
import { 
    Container,
    Content, 
    List,
 } from 'native-base';
 import PostItem from './postitem'

class PostList extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                    </List>
                </Content>
            </Container>
        );
    }
}

export default PostList