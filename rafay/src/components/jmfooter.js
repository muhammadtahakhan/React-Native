/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

type Props = {};

export default class Jmfooter extends Component<Props> {
 
  render() {
    return (
      <Footer>
          <FooterTab>
            <Button vertical>
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon name="people" />
              <Text>Profile</Text>
            </Button>
            <Button vertical>
              <Icon name="add-circle" />
              <Text>Services</Text>
            </Button>
            <Button active  vertical>
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

