import { StackNavigator } from 'react-navigation';
import Login from './../screens/login';
import Home from './../screens/home';

export const RootNavigator = StackNavigator({
            Login: {    screen: Login,
                      },
            
                    },
        {
        initialRouteName: 'Login',
                  }
              );
