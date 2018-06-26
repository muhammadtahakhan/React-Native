/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,View, ActivityIndicator} from 'react-native';
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
        other:'',
        total:0,
        fullTotal:0,
        users_id:this.props.navigation.state.params.users_id
      }, function(){

      });
      
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  onCheckBoxPress(id, price) {
    let tmp = this.state.selectedServiceId;
    let toral_price = this.state.total;
    if ( tmp.includes( id ) ) {
      tmp.splice( tmp.indexOf(id), 1 );
      toral_price = toral_price-price;
    } else {
      tmp.push( id );
      toral_price = toral_price+price
    }
    


    this.setState({
      selectedServiceId: tmp,
    });

    this.setState({
      total:toral_price,
      fullTotal:parseFloat(toral_price || 0)+parseFloat(this.state.other || 0)
    });

  }

  updateFormField = fieldName => text => {
    
    this.setState({ [fieldName]: text })

    this.setState({
      fullTotal:parseFloat(this.state.total) + parseFloat(text) 
    });

  }

  async submitForm () {
    try {
            let data = { fullTotal, users_id } = this.state;
            this.setState({isLoading:true});
            // Now do something with email and password
            // Alert.alert(JSON.stringify(data));

        fetch(API_URL+"add_paid_amount", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
           })
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({isLoading:false});
            if(responseData.status) {

              // console.warn(responseData.api_token);
              this.props.navigation.goBack()
            
            }
          })
        .done();
    } catch (error) {
         console.error(error);
    }
    
  }
  
  render() {
    const { state, navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const isLoading =this.state.isLoading;
    return (
     
      <Container>
          <Jmheader title={params.address} navigation={this.props.navigation} />
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
                
                  <ListItem key={key}>
                  <CheckBox 
                  checked={this.state.selectedServiceId.includes(item.service_id) ? true : false}
                  onPress={()=>this.onCheckBoxPress(item.service_id, item.service_price)}
                   />
                 <Body>
                    <Text>{item.service_name}</Text>
                 </Body>
                 </ListItem>
                
                )
                }
                <Item regular>
                     <Input placeholder='Other Amount' onChangeText={this.updateFormField('other')} />
                </Item>
                <Text>Total:{this.state.fullTotal}</Text>
                </Col>
              </Grid>
         

              <Grid style={{alignItems: 'center'}} style={{padding: 30}}>
                <Col>
                  <Button block bordered info  onPress={() => this.submitForm()} >
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

