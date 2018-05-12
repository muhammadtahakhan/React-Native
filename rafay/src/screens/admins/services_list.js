/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,View, ActivityIndicator
} from 'react-native';
import {Container, Header, Content, Footer, Title, Label, TextInput,
  Input, InputGroup, Button, Icon, Form, Item,
  FooterTab, Text, Badge ,Grid, Col,ListItem, Body
} from 'native-base';
import { navigationOptions, navigation } from 'react-navigation';
import {API_URL} from './../../utilities/Globals';
import  Jmheader from './../../components/jmheader'
import Jmfooter from './../../components/jmfooter';




type Props = {};
export default class SerrvicesList extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
   
    this.state = {isLoading: true, services : []}
  }

  componentDidMount(){
    return fetch(API_URL+'services')
      .then((response) => response.json())
      .then((responseJson) => {

   
      this.setState({
        isLoading: false,
        services: responseJson,
        
      }, function(){

      });
     
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    const { state, navigate } = this.props.navigation;
    const isLoading =this.state.isLoading;
    return (
     
      <Container>
          <Jmheader title="services List" />
          <View>
          {(isLoading)?
           <ActivityIndicator />:<Text></Text>
         }
          </View>
              <Content  >
              <Grid style={{alignItems: 'center'}}>
                <Col>
                {
                  this.state.services.map((item, key)=>
                
                  <ListItem key={key} >
                 
                 <Body>
                    <Text>{item.service_name}</Text>
                 </Body>
                 </ListItem>
                
                )
                }
               
                </Col>
              </Grid>
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
                
                </Col>
              </Grid>

              <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                  <Button block bordered info onPress={() => this.props.navigation.navigate('AddServices')} >
                  <Text> Add New Service. </Text>
                  </Button>
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

