/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'native-base';


// Import navigators
import { StackNavigator } from 'react-navigation';
import {  MainNavigator }from './src/routes/mainnavigator';
import { AuthNavigator } from './src/routes/authnavigator';
import { RootNavigator } from './src/routes/rootnavigator';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootNavigator />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
