import { createAppContainer } from 'react-navigation';

import { AppNavigator } from './appNavigator'

const rootStack = AppNavigator
const AppContainer = createAppContainer(rootStack)


//export default AppContainer