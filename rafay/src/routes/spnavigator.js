import { StackNavigator } from 'react-navigation';
import HousesList from './../screens/service_providers/houses_list';
import PayCharges from './../screens/service_providers/pay_charges';



export const SpNavigator = StackNavigator({
  HousesList: {   screen: HousesList, },
  PayCharges: {   screen: PayCharges, },
                
                },     
        {
        initialRouteName: 'HousesList',
                  }
              );
