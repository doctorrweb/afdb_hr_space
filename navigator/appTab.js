import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons, Entypo } from "@expo/vector-icons";
import { 
    HRDirectStack,
    NotificationStack,
    UsefulLinkStack,
    ContactStack
 } from '../navigator/appNavigator'
import AppDrawerNavigator from '../navigator/appDrawer'

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: AppDrawerNavigator,
    navigationOptions: {
      tabBarLabel: "HR Space",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          //style={{ paddingLeft: 20 }}
          color={tintColor}
          //onPress={() => navigation.openDrawer()}
          name="md-contacts"
          size={24}
        />
      )
    }
  },
  Contact: {
    screen: ContactStack,
    navigationOptions: {
      tabBarLabel: "Information",
      tabBarIcon: ({tintColor}) => (
        <Ionicons
          color={tintColor}
          name="md-information-circle"
          size={24}
        />
      )
    }
  }
},
  {
    //hideStatusBar: true,
    //drawerBackgroundColor: "#02983E",
    //overlayColor: "rgba(50,50,50,.7)",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#02983E"
    },
    tabBarOptions: {
      activeTintColor: '#02983E',
      labelStyle: {
        fontSize: 12,
        //color: '#000'
      },
      style: {
        backgroundColor: '#F1F2F6',
        paddingTop: 10
      }
    }
  }
);

export default MainTabs