/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,View
  
} from 'react-native';
import {Container, Header, Content, Footer, Title, Label, TextInput,
  Input, InputGroup, Button, Icon, Form, Item,
  FooterTab, Text, Badge ,Grid, Col
} from 'native-base';
import { navigationOptions, navigation } from 'react-navigation';
import {API_URL} from './../../utilities/Globals';
import  Jmheader from './../../components/jmheader'
import Jmfooter from './../../components/jmfooter';


type Props = {};
export default class AddServices extends Component<Props> {
 
  static navigationOptions = {
    header: null
  }

  async submitForm () {
    try {
      
            let data = { service_name, service_price } = this.state;
            this.setState({isLoading:true});
            // Now do something with email and password
            // Alert.alert(JSON.stringify(data));

        fetch(API_URL+"services", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
           })
        .then((response) => response.json())
        .then((responseData) => {
          
            if(responseData.status) {
              this.setState({isLoading:false});
              this.props.navigation.goBack()
              // console.warn(responseData.api_token);
            
            
            
            }
          })
        .done();
    } catch (error) {
         console.error(error);
    }
    
  }

  updateFormField = fieldName => text => {
    
    this.setState({ [fieldName]: text })
    
  }

  componentDidMount(){
    return fetch(API_URL+'services')
      .then((response) => response.json())
      .then((responseJson) => {

   
      this.setState({
        isLoading: false,
        service_name: '',
       service_price: '',
       
      }, function(){

      });
      
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    const { state, navigate } = this.props.navigation;
    return (
     
      <Container>
          <Jmheader title="Add new Service" />
             
              <Content  >
              <Grid style={{alignItems: 'center'}}>
                <Col>
                <Form>
                  <Item floatingLabel>
                  <Label>Service Name</Label>
                  <Input onChangeText={this.updateFormField('service_name')}/>
                  </Item>
                  <Item floatingLabel last>
                  <Label>Service Price</Label>
                  <Input onChangeText={this.updateFormField('service_price')}/>
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
                <Button block bordered info onPress={() => this.submitForm()}>
                  <Text> Save </Text>
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

