/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

import { navigationOptions, navigation } from 'react-navigation';

type Props = {};

export default class Jmfooter extends Component<Props> {
  
  constructor(props) {
    super(props);
    
  }
 

 
  render() {
    // const { state, navigate } = this.props.navigation;
    return (
      <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Profile')} vertical>
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon name="people" />
              <Text>Profile</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Services')} vertical>
              <Icon name="add-circle" />
              <Text>Services</Text>
            </Button>
            <Button vertical>
              {/* <Badge ><Text>51</Text></Badge> */}
              <Icon name="eye" />
              <Text>Monitoring</Text>
            </Button>
        </FooterTab>
      </Footer>
      );
  }
}



const styles = StyleSheet.create({
  
});

