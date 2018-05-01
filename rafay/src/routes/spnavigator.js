import { StackNavigator } from 'react-navigation';
import Login from './../screens/login';
import Home from './../screens/home';
import Gardener from './../screens/gardener';
import Electrician from './../screens/electrician';
import AccountLedger from './../screens/account_ledger';
import HouseAddress from './../screens/house_address';
import HoseMonitoring from './../screens/house_monitoring';
import Profile from './../screens/profile';
import Services from './../screens/services';
import Painter from "./../screens/painter";


export const SpNavigator = StackNavigator({
                  Login: {   screen: Login, },
                
                },     
        {
        initialRouteName: 'Login',
                  }
              );