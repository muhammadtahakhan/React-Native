import { StackNavigator } from 'react-navigation';
import Login from './../screens/login';
import Home from './../screens/home';

export const AuthNavigator = StackNavigator({
            Login: {    screen: Login,
                      },
            
                    },
        {
        initialRouteName: 'Login',
                  }
              );
