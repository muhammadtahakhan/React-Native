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
import { navigationOptions } from 'react-navigation';
import  Jmheader from './../components/jmheader'
import Jmfooter from './../components/jmfooter';


type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Container>
          <Jmheader title="Login" />
             
              <Content  >
              <Grid style={{alignItems: 'center'}}>
                <Col>
                <Form>
                  <Item floatingLabel>
                  <Label>Username</Label>
                  <Input />
                  </Item>
                  <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input />
                  </Item>
                  </Form>
                
                </Col>
              </Grid>
              <Grid style={{alignItems: 'center'}}>
                <Col>
               
                </Col>
              </Grid>
              <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
               
                  <Button block bordered info onPress={() => this.props.navigation.navigate('Home')}>
                  <Text> Login </Text>
                  </Button>
                </Col>
              </Grid>

         
                            
              </Content>
              
      </Container>
     
    );
  }
}



const styles = StyleSheet.create({
  
});

