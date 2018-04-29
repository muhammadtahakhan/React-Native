/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  
} from 'react-native';
import {Container, Header, Content, Footer, Title, Label, TextInput,
  Input, InputGroup, Button, Icon, Form, Item,
  FooterTab, Text, Badge ,Grid, Col
} from 'native-base';
import { navigationOptions, navigation } from 'react-navigation';
import  Jmheader from './../components/jmheader'
import Jmfooter from './../components/jmfooter';


type Props = {};
export default class Services extends Component<Props> {
  static navigationOptions = {
    header: null
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
     
      <Container>
          <Jmheader title="services" />
             
              <Content  >
              <Grid style={{alignItems: 'center'}}>
                <Col>
                
                </Col>
              </Grid>
              <Grid style={{alignItems: 'center'}}>
                <Col>
               
                </Col>
              </Grid>

              <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                  <Button block bordered info onPress={() => this.props.navigation.navigate('Electrician')} >
                  <Text> Electrician </Text>
                  </Button>
                </Col>
              </Grid>

               <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                  <Button block bordered info onPress={() => this.props.navigation.navigate('Painter')} >
                  <Text> Painter </Text>
                  </Button>
                </Col>
              </Grid>

              

               <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                  <Button block bordered info onPress={() => this.props.navigation.navigate('Profile')} >
                  <Text> Plumber</Text>
                  </Button>
                </Col>
              </Grid>

               <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                  <Button block bordered info onPress={() => this.props.navigation.navigate('Gardener')} >
                  <Text> Gardener </Text>
                  </Button>
                </Col>
              </Grid>

         
                            
              </Content>
              <Jmfooter navigation={this.props.navigation} />
              
      </Container>
     
    );
  }
}



const styles = StyleSheet.create({
  
});

