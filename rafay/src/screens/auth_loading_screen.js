import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

type Props = {};
export default class AuthLoadingScreen extends Component<Props> {
  constructor(props) {
    super(props);
    
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
  
    try {
      const userToken = await AsyncStorage.getItem('@userToken:key').then((value)=> {console.warn(value)});
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
      // console.warn(userToken);
      if (userToken !== null){
        // We have data!!
        // console.warn(userToken);
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        
      }
    } catch (error) {
      // Error retrieving data
    }

    
  };


  componentDidMount(){
    this._bootstrapAsync();
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


//define screen styles
const styles =
StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    padding: 50,
    backgroundColor: 'white',
   
},
  });

