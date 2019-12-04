import React, { Component } from 'react';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './navigator/appNavigator'
import { AppDrawerNavigator } from './navigator/appDrawer'

class App extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Grid>
                    <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                    <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                </Grid>
            </Container>
        );
    }
}

export default createAppContainer(AppDrawerNavigator)