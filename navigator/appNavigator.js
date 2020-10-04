import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import AboutAfdb from '../screens/aboutAfdb'
import Benefits from '../screens/benefits'
import Benefitspost from '../screens/benefitspost'
import HRDirect from '../screens/hrdirect'
import AboutAfdbPost from '../screens/aboutAfdbpost'
import Contact from "../screens/contact"
import DocumentList from '../screens/document'
import HireToRetire from '../screens/hireToRetire'
import Login from '../screens/login'

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#e9e9e9"
        },
        headerTitle: "Useful Link",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        }
      }
    }
  }
})

const BenefitsStack = createStackNavigator(
    {
        Benefits: {
            screen: Benefits,
            defaultNavigationOptions: ({ navigation }) => {
                return {
                    headerStyle: {
                        backgroundColor: '#e9e9e9'
                    },
                    headerTitle: 'About Afdb',
                    headerTintColor: '#02983E',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                        flex: 1
                    },
                    headerLeft: (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color='#02983E'
                            onPress={() => navigation.openDrawer()}
                            name='md-menu'
                            size={30}
                        />
                    )
                }
            }
        },
        BenefitsPost: {
            screen: Benefitspost,
            defaultNavigationOptions: ({ navigation }) => {
                return {
                    headerStyle: {
                        backgroundColor: '#e9e9e9'
                    },
                    headerTitle: 'About Afdb',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                        flex: 1
                    },
                    headerLeft: (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color='#02983E'
                            onPress={() => navigation.goBack()}
                            name='md-menu'
                            size={30}
                        />
                    ),
                    headerRight: (
                        <View />
                    )
                }
            }
        }
    }
)

const AboutAfdbStack = createStackNavigator({
  AboutAfdb: {
    screen: AboutAfdb,
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#000000"
        },
        title: "About Afdb",
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 20 }}
            color="#ffffff"
            onPress={() => navigation.goBack()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: <View />
      };
    }
  },
  AboutAfdbPost: {
    screen: AboutAfdbPost,
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#e9e9e9"
        },
        title: "About Afdb",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 20 }}
            color="#02983E"
            onPress={() => navigation.goBack()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: <View />
      };
    }
  }
})

const HRDirectStack = createStackNavigator(
    {
        
        HRDirect: {
            screen: HRDirect,
            defaultNavigationOptions: ({ navigation }) => {
                return {
                    headerStyle: {
                        backgroundColor: '#e9e9e9'
                    },
                    headerTitle: 'HR Direct',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                        flex: 1,
                    },
                    headerLeft: (
                        <Ionicons
                            style={{ paddingLeft: 20 }}
                            color='#02983E'
                            onPress={() => navigation.openDrawer()}
                            name='md-menu'
                            size={30}
                        />
                    ),
                    headerRight: (
                        <View />
                    )
                }
            }
        },
    Documents: {
      screen: DocumentList,
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: "#e9e9e9"
          },
          headerTitle: "Documents",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
            flex: 1
          },
          headerLeft: (
            <Ionicons
              style={{ paddingLeft: 20 }}
              color="#02983E"
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          ),
          headerRight: <View />
        };
      }
    }
  }
)

const DocumentStack = createStackNavigator({
  Document: {
    screen: DocumentList,
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#e9e9e9"
        },
        headerTitle: "HR Documents",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 20 }}
            color="#02983E"
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: <View />
      };
    }
  }
})


const HireToRetireStack = createStackNavigator({
  UsefulLink: {
    screen: HireToRetire,
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#e9e9e9"
        },
        headerTitle: "Useful Link",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerRight: <View />
      };
    }
  }
})

const ContactStack = createStackNavigator({
  Contact: {
    screen: Contact,
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#e9e9e9"
        },
        headerTitle: "Contact",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 20 }}
            color="#02983E"
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: <View />
      };
    }
  }
})


export {
  BenefitsStack,
  AboutAfdbStack,
  HRDirectStack,
  DocumentStack,
  ContactStack,
  HireToRetireStack,
  AuthStack
};