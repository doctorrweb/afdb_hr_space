import React, { Component } from "react"
import { StyleSheet, Alert, Linking } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import PostListCard from "../containers/cardlist"
import { Text, Button, Icon, Spinner, List, Container } from 'native-base'
import { getBenefitPosts } from '../data/benefits/benefitsApi'

class Benefits extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      data: null
    }
    //console.log('this.props.navigation.state.routeName ', this.props.navigation.state.routeName)
  }

  componentDidMount() {

    getBenefitPosts().then(
      data => {
        this.setState({
          isLoading: false,
          data
        })
        
      },
      error => {
        Alert.alert("Error Data loading")
      }
    )
    
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Benefits",
      headerStyle: {
        backgroundColor: "#e9e9e9"
      },
      headerTintColor: "#02983E",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: () => (
        <Ionicons
          style={{ paddingLeft: 20 }}
          color="#02983E"
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      )
    }
  }

 
  // renderLoading = (timeout) => {
    
  //   setTimeout(() => {
  //     Alert.alert("Make sure that you are connected to the Bank's Network")
  //   }, timeout)

  //   return <Spinner color="green" />
  // }


  render() {
    return this.state.data ? (
      <Container>
        <Button 
        full 
        success
          onPress={() => Linking.openURL("https://www.afdb.org/en/about/corporate-information")}
        >
          <Icon type='FontAwesome' name='road' />
          <Text>See the Roadmap</Text>
        </Button>
        <List
          dataArray={this.state.data}
          renderRow={(item, index) => (
            <PostListCard data={item} nav={this.props.navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    ) : (
      <Spinner color="green" />
      // this.renderLoading(5000)
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  }
})

export default Benefits