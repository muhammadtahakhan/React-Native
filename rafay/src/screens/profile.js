/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,AsyncStorage,View, ActivityIndicator
  
} from 'react-native';
import {Container, Header, Content, Footer, Title, Label, TextInput,
  Input, InputGroup, Button, Icon, Form, Item,
  FooterTab, Text, Badge ,Grid, Col, ListItem,Body
} from 'native-base';
import { navigationOptions, navigation } from 'react-navigation';
import {API_URL} from './../utilities/Globals';
import  Jmheader from './../components/jmheader'
import Jmfooter from './../components/jmfooter';


type Props = {};
export default class Profile extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
   
    this.state = {isLoading: true, payments : []}
  }

  componentDidMount(){

    this.fetch_data();
   
  }

  fetch_data(){
    let data = {'users_id':global.users_id}
    fetch(API_URL+'get_ledger', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(data)
   })
     .then((response) => response.json())
     .then((responseJson) => {

  
      this.setState({
         isLoading: false,
         payments: responseJson,
         
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
          <Jmheader title="Profile" navigation={this.props.navigation} />
             
              <Content  >
              <View>
                {(isLoading)?
                <ActivityIndicator />:<Text></Text>
                }
              </View>
              <Grid style={{alignItems: 'center'}}>
                <Col>
               
                </Col>
              </Grid>
              <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
               
                  {/* <Button block bordered info onPress={() => this.props.navigation.navigate('Services')} > */}
                  <Text>Address : {global.address} </Text>
                  {/* </Button> */}
                </Col>
              </Grid>
              <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                 <Text> Account ledger :</Text>
                

                   {
                  this.state.payments.map((item, key)=>
                
                  <ListItem key={key} >
                 
                 <Body>
                    <Text>Paid Amount:{item.total_amount}</Text>
                 </Body>
                 </ListItem>
                
                )
                }
                </Col>
              </Grid>
             

         
                            
              </Content>
              <Jmfooter navigation={this.props.navigation}/>
              
      </Container>
     
    );
  }
}



const styles = StyleSheet.create({
  
});

