import { StackNavigator, SwitchNavigator } from 'react-navigation';
import Login from './../screens/login';
// import Home from './../screens/home';
import AuthLoadingScreen from './../screens/auth_loading_screen';

import {AuthNavigator} from './authnavigator';
import {MainNavigator} from './mainnavigator';

// -----------------------------------------
    export default SwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: MainNavigator,
        Auth: AuthNavigator,
      },
      {
        initialRouteName: 'AuthLoading',}
    );
