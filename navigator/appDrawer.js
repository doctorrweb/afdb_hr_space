import React from 'react'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import {
    View, 
    SafeAreaView, 
    ScrollView, 
    Dimensions,
    Image,
    Text
 } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {
  HRDirectStack,
  BenefitsStack,
  AboutAfdbStack,
  HireToRetireStack,
  ReporttStack,
  ContactStack
} from "./appNavigator";
import Documents from '../screens/document'
import Reports from '../screens/Report'
import HireToRetire from '../screens/hireToRetire'
import { HeaderTitle } from 'react-navigation-stack';




const CustomdrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ 
            height: 100, 
            backgroundColor: 'white', 
            alignItems: 'center', 
            justifyContent: 'center'
         }}>
            <Image source={require('../assets/logo.png')} style={{ height: 54, width: 70 }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HRDirectStack,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            //style={{ paddingLeft: 20 }}
            color={tintColor}
            name="md-home"
            size={20}
          />
        )
      }
    },
    AboutAfdb: {
      screen: AboutAfdbStack,
      navigationOptions: {
        drawerLabel: "About AfDB",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            //style={{ paddingLeft: 20 }}
            color={tintColor}
            name="md-paper"
            size={20}
          />
        )
      }
    },
    Benefits: {
      screen: BenefitsStack,
      navigationOptions: {
        drawerLabel: "From Hire to Retire",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            //style={{ paddingLeft: 20 }}
            color={tintColor}
            name="md-swap"
            size={20}
          />
        )
      }
    },
    NewComer: {
      screen: HireToRetireStack,
      navigationOptions: {
        drawerLabel: "New Comer",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            //style={{ paddingLeft: 20 }}
            color={tintColor}
            name="md-person-add"
            size={20}
          />
        )
      }
    },
    Documents: {
      screen: Documents,
      navigationOptions: {
        drawerLabel: "HR Documents",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            //style={{ paddingLeft: 20 }}
            color={tintColor}
            name="md-filing"
            size={20}
          />
        )
      }
    }
    //Contact: ContactStack
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "#fff",
    overlayColor: "rgba(50,50,50,.7)",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#02983E"
    },
    iconContainerStyle: {
      opacity: 1
    },
    contentComponent: CustomdrawerComponent
    /*
    defaultNavigationOptions: {
      initialRouteName: 'HRDirect'
    }
    */
  }
);


export default AppDrawerNavigator