import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, Image, Linking, View } from 'react-native'
import { Container, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'
import * as Font from 'expo-font'

class Landing extends Component {

    static navigationOptions = {
        headerTransparent: true,
        drawerIcon: () => (
            <Ionicons
                //style={{ paddingLeft: 20 }}
                color='#fff'
                name='md-home'
                size={30}
            />
        ),
    }

    render() {
      return (
        <Container>
          <Grid>
            <Row size={90}>
              <ImageBackground
                source={require("../assets/login-cover.png")}
                style={styles.container}
              >
                <Image
                  style={{
                    marginBottom: 50,
                    height: 119,
                    width: 155
                  }}
                  source={require("../assets/logo.png")}
                />
                <Text
                  style={{
                    fontSize: 45,
                    fontWeight: "bold",
                    fontFamily: "Futura",
                    color: "#02983E",
                    textAlign: 'center',
                    padding: 30
                  }}
                >
                  Hire to Retire
                  </Text>
                <Button
                  rounded
                  small
                  block
                  onPress={() => Linking.openURL("https://chhr.afdb.org/hire-to-retire/")}
                  style={{ backgroundColor: "#02983E", width: 250, marginLeft: 75 }}
                >
                  <Text style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 16
                  }}>Hire to Retire</Text>
                </Button>

                <Button
                  rounded
                  small
                  block
                  onPress={() => this.props.navigation.navigate("HRDirect")}
                  style={{ backgroundColor: "#fff", borderColor: '#02983E', borderStyle: 'solid', borderWidth: 1, width: 200, marginLeft: 100, marginTop: 30 }}
                >
                  <Text style={{
                    color: "#02983E",
                    fontWeight: "bold",
                    fontSize: 16
                  }}>Bank Staff</Text>
                </Button>
                <View style={{
                  marginTop: 130,
                  width: 230,
                  textAlign: 'center',
                }}>
                  <Image
                    style={{
                      marginLeft: 90,
                      height: 37,
                      width: 35
                    }}
                    source={require("../assets/logo-rsa.png")}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Activate your VPN outside the African Development Bank Network
                  </Text>
                </View>
              </ImageBackground>
            </Row>
            
          </Grid>
        </Container>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
})

export default Landing