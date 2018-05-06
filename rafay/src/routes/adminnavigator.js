import { StackNavigator } from 'react-navigation';
import Login from './../screens/login';
import AddServices from './../screens/admins/add_services';
import SerrvicesList from './../screens/admins/services_list';


export const AdminNavigator = StackNavigator({
  AddServices: {   screen: AddServices,   },
  SerrvicesList: {screen: SerrvicesList}
                 
           
                },     
        {
        initialRouteName: 'SerrvicesList',
                  }
              );
