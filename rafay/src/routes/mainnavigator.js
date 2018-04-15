import { StackNavigator } from 'react-navigation';
import Login from './../screens/login';
import Home from './../screens/home';

export const MainNavigator = StackNavigator({
            Login: {    screen: Login,
                      },
            Home: {
                        screen: Home,
                      },
                    },
        {
        initialRouteName: 'Home',
                  }
              );
