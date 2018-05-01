/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,Alert, AsyncStorage} from 'react-native';
import {Container, Header, Content, Footer, Title, Label, TextInput,
  Input, InputGroup, Button, Icon, Form, Item,
  FooterTab, Text, Badge ,Grid, Col
} from 'native-base';
import { navigationOptions } from 'react-navigation';
import  Jmheader from './../components/jmheader'
import Jmfooter from './../components/jmfooter';


type Props = {};
export default class Login extends Component<Props> {
  state = {
    email: '',
    password: '',
  }
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.updateFormField = this.updateFormField.bind(this)
  }

  async submitForm () {
    try {
            let data = { email, password } = this.state;
            // Now do something with email and password
            // Alert.alert(JSON.stringify(data));

        fetch("http://192.168.0.107/rafay/public/login", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
           })
        .then((response) => response.json())
        .then((responseData) => {
          Alert.alert(responseData.message);  
            if(responseData.status) {
              console.warn(responseData.api_token);
            
             switch (responseData.user_type) {
              case 'admin':
              this.props.navigation.navigate('Admin');
                  break;
              case 'sp':
              this.props.navigation.navigate('Sp');
                  break;
              case 'user':
              this.props.navigation.navigate('App');
                  break;
             
          }
            
            }
          })
        .done();
    } catch (error) {
         console.error(error);
    }
    
  }

  async saveKey(value) {
    try {
      await AsyncStorage.setItem('@userToken:key', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
}

  componentDidMount(){
   
  }

  updateFormField = fieldName => text => {
    
    this.setState({ [fieldName]: text })
  }

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
                  <Label>Email</Label>
                  <Input onChangeText={this.updateFormField('email')}/>
                  </Item>
                  <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input onChangeText={this.updateFormField('password')}/>
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
               
                  <Button block bordered info onPress={this.submitForm}>
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

