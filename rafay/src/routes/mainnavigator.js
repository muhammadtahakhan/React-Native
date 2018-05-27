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
import ServiceRequest from './../screens/service_request';
import SerrvicesList from './../screens/services_list';


export const MainNavigator = StackNavigator({
                  Login: {   screen: Login, },
                  Home: {   screen: Home, },
                  Gardener: {screen: Gardener, },
                  Painter: {screen: Painter, },
                  Electrician: {  screen: Electrician,  },
                  AccountLedger: {  screen: AccountLedger,  },
                  HouseAddress: {   screen: HouseAddress,   },
                  Profile: {   screen: Profile,   },
                  Services: {   screen: Services,   },
                  ServiceRequest: {   screen: ServiceRequest,   },
                  SerrvicesList: {   screen: SerrvicesList,   },
                 
           
                },     
        {
        initialRouteName: 'Profile',
                  }
              );
