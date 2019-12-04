//import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Landing from '../screens/landing'

import AuthLoadingScreen from '../screens/authLoadingScreen'
import Login from '../screens/login'
import HireToRetire from '../screens/hireToRetire'
import MainTabs from '../navigator/appTab'
import { AuthStack } from '../navigator/appNavigator'
import AppDrawerNavigator from './appDrawer'
//import LandingPage from '../screens/landingPage'
//import OnBoarding from '../screens/onboarding'

const AppSwitcher = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen
  },
  Landing: {
    screen: Landing
  },
  newAtAfDB: HireToRetire,
  App: MainTabs,
  Auth: {
    screen: AuthStack
  },
  menu: AppDrawerNavigator
})

const MainSwitcher = createAppContainer(AppSwitcher, {
  initialRouteName: 'AuthLoading'
})


export default AppSwitcher