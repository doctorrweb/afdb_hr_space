import React, { Component } from 'react'
import axios from "react-native-axios"
import { 
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    AsyncStorage,
    View
 } from 'react-native'
//import { View } from 'native-base'

import { END_POINT_VALID_AUTH } from '../utils/connexionApi'

//const token = AsyncStorage.getItem("isLoggedIn")

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props)
    this._validateToken()
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }

  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    console.log(isLoggedIn);
    this.props.navigation.navigate(isLoggedIn !== "1" ? "Auth" : "Landing");
  }

  _validateToken = async () => {
    const token = await AsyncStorage.getItem("isLoggedIn")
    const newToken = token ? `Bearer ${token.slice(1, -1)}` : null
    console.log('newToken', newToken)

    if (newToken !== null) {

      return (
        await axios({
          method: "POST",
          url: END_POINT_VALID_AUTH,
          headers: {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'Content-Length': '0',
            'Accept-Encoding': 'gzip, deflate',
            Host: 'chhr-test.afdb.org',
            Accept: "*/*",
            Authorization: newToken
          }
        })
          .then(response => {
            if (response.data.data.status === 200) {
              this.props.navigation.navigate("Landing");
            } else {
              this.props.navigation.navigate("Auth");
            }
          })
          .catch(error => {
            AsyncStorage.clear()
            this.props.navigation.navigate("Auth");
            console.log(error);
          })
      )
    } else {
      this.props.navigation.navigate("Auth");
    }
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 100,
        //backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        //width: "100%",
        //height: "100%"
    }
});

export default AuthLoadingScreen