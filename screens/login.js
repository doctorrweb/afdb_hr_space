import React, { Component } from 'react'
import axios from "react-native-axios"
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Alert,
    AsyncStorage,
    Image,
    ImageBackground
 } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, View, Button, Spinner } from 'native-base'
import { Authentication, connexion, END_POINT_AUTH } from '../utils/connexionApi'

const userInfo = {username: 'admin@test.net', password: 'bbb++123'}



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      username: "",
      password: "",
      token: ""
    };
  }
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../assets/login-cover.png")}
          style={styles.container}
        >
          <Image
            style={{
              marginTop: 50,
              //marginLeft: '30%',
              //marginRight: '30%',
              height: 119,
              width: 155
            }}
            source={require("../assets/logo.png")}
          />
          <Content>
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
              HR Space
                  </Text>
            <Form>
              <Item floatingLabel>
                <Label style={{ color: '#02983E', fontWeight: 'bold' }}>Username</Label>
                <Input
                  keyboardType="email-address"
                  onChangeText={username => this.setState({ username })}
                  value={this.state.username}
                />
              </Item>
              <Item floatingLabel last>
                <Label style={{ color: '#02983E', fontWeight: 'bold' }}>Password</Label>
                <Input
                  keyboardType="default"
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
              </Item>
            </Form>
            <View style={styles.btnContainer}>
              <Button
                small
                block
                onPress={() => this._signin(this.state.username, this.state.password)}
                //onPress={() => this._login}
                style={styles.signBtn}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign in</Text>
              </Button>
            </View>
            <Image
              style={{
                marginTop: 60,
                height: 35,
                width: 85,
                marginLeft: 160,
                //marginRight: 100,
              }}
              source={require("../assets/logo_chhr.png")}
            />
          </Content>
        </ImageBackground>
        
      </Container>
    )
  }

  _signin = async (username, password) => {
      await axios
        .post(END_POINT_AUTH, {
          username,
          password
        })
        .then(response => {
            if (response.status === 200) {
                AsyncStorage.setItem("isLoggedIn", JSON.stringify(response.data.token))
                this.props.navigation.navigate("Landing");
            } else {
                this.customAlert()
            }
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        });
  };

  _login = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {
      console.log("Connected !");
      await AsyncStorage.setItem("isLoggedIn", "1");
      this.props.navigation.navigate("Landing");
    } else {
      console.log("Not Connected !");
    }
  };

  // Works on both Android and iOS
 customAlert = () => Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);

};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 100,
        //backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        //width: "100%",
        //height: "100%"
    },
    signBtn: {
        backgroundColor: "#02983E",
        padding: 15,
        width: "100%",
        color: '#fff'
    },
    //txtBtn,
    btnContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Login