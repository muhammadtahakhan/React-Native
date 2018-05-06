/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import {Container, Header, Content, Footer, Title, Label, TextInput,
  Input, InputGroup, Button, Icon, Form, Item,
  FooterTab, Text, Badge ,Grid, Col,List, ListItem, Left, CheckBox, Body
} from 'native-base';
import { navigationOptions, navigation } from 'react-navigation';
import {API_URL} from './../../utilities/Globals';
import  Jmheader from './../../components/jmheader'
// import Jmfooter from './../../components/jmfooter';


type Props = {};
export default class PayCharges extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
   
    this.state = {isLoading: true, services : []},
    this.updateFormField = this.updateFormField.bind(this)
  }

  componentDidMount(){
    return fetch(API_URL+'services')
      .then((response) => response.json())
      .then((responseJson) => {

   
      this.setState({
        isLoading: false,
        services: responseJson,
        selectedServiceId: [],
        other:','
      }, function(){

      });
      
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  onCheckBoxPress(id) {
    let tmp = this.state.selectedServiceId;

    if ( tmp.includes( id ) ) {
      tmp.splice( tmp.indexOf(id), 1 );
    } else {
      tmp.push( id );
    }

    this.setState({
      selectedServiceId: tmp
    });
  }

  updateFormField = fieldName => text => {
    
    this.setState({ [fieldName]: text })
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
                {
                  this.state.services.map((item, key)=>
                
                  <ListItem key={key}>
                  <CheckBox 
                  checked={this.state.selectedServiceId.includes(item.service_id) ? true : false}
                  onPress={()=>this.onCheckBoxPress(item.service_id)}
                   />
                 <Body>
                    <Text>{item.service_name}</Text>
                 </Body>
                 </ListItem>
                
                )
                }
                <Item regular>
                     <Input placeholder='Other' onChangeText={this.updateFormField('other')} />
                </Item>
                </Col>
              </Grid>
         

              <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                  <Button block bordered info  >
                  <Text> Submit </Text>
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

