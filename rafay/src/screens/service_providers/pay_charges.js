/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import {Container, Header, Content, Footer, Title, Label, TextInput,
  Input, InputGroup, Button, Icon, Form, Item,
  FooterTab, Text, Badge ,Grid, Col,List, ListItem, Left
} from 'native-base';
import { navigationOptions, navigation } from 'react-navigation';
import  Jmheader from './../../components/jmheader'
// import Jmfooter from './../../components/jmfooter';


type Props = {};
export default class PayCharges extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  
  render() {
    const { state, navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
   
    return (
     
      <Container>
          <Jmheader title={params.address} />
         
             
              <Content  >
              <Grid style={{alignItems: 'center'}}>
                <Col>
               
                </Col>
              </Grid>
         

              <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                  <Button block bordered info onPress={() => this.props.navigation.goBack()} >
                  <Text> Go back... </Text>
                  </Button>
                </Col>
              </Grid>

         
                            
              </Content>
              {/* <Jmfooter navigation={this.props.navigation} /> */}
              
      </Container>
     
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

