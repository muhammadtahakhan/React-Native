import { StackNavigator, SwitchNavigator } from 'react-navigation';
import Login from './../screens/login';
// import Home from './../screens/home';

import {AuthNavigator} from './authnavigator';
import {MainNavigator} from './mainnavigator';

import  {AuthLoadingScreen}  from './../screens/auth_loading_screen';

export const RootNavigator = StackNavigator({
      AuthNavigator: {    screen: AuthNavigator       },
      MainNavigator: {    screen: MainNavigator      },
                
                    },
        {
        initialRouteName: 'AuthNavigator',
                  }
              );
