/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title } from 'native-base';

type Props = {};

export default class Jmheader extends Component<Props> {
 
  render() {
    return (
              <Header ><Title>{this.props.title}</Title></Header>
      );
  }
}



const styles = StyleSheet.create({
  
});

