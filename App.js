import React, { Component } from 'react';
import { Container, Header, Root } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid'
import { createAppContainer } from 'react-navigation';
import AppSwitcher from './navigator/appSwitcher'

class App extends Component {
  render() {
    return (
      <Root>
        <AppSwitcher />
      </Root>
    );
  }
}

export default createAppContainer(AppSwitcher)