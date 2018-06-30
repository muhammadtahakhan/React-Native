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
  FooterTab, Text, Badge ,Grid, Col, Textarea
} from 'native-base';
import { navigationOptions, navigation } from 'react-navigation';
import {API_URL} from './../utilities/Globals';
import  Jmheader from './../components/jmheader'
import Jmfooter from './../components/jmfooter';




type Props = {};
export default class ServiceRequest extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
   
    this.state = {isLoading: true},
    this.updateFormField = this.updateFormField.bind(this)
  }

  updateFormField = fieldName => text => {
    
    this.setState({ [fieldName]: text });
    console.warn(text);
    
  }

  componentDidMount(){
    this.setState({
      isLoading: false,
      users_id: global.users_id||0,
      request_content: '',
     
    }, function(){

    });
  }

  async submitForm () {
    try {
      
            let data = { users_id, request_content } = this.state;
            this.setState({isLoading:true});
            // Now do something with email and password
            // Alert.alert(JSON.stringify(data));

        fetch(API_URL+"service_request", {
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

  render() {
    const { state, navigate } = this.props.navigation;
    const { navigation } = this.props;
    const stitle = navigation.getParam('title', '');
    const isLoading =this.state.isLoading;
    return (
     
      <Container>
          <Jmheader title={stitle} navigation={this.props.navigation} />
          <View>
         {(isLoading)?
           <ActivityIndicator />:<Text></Text>
         }
         </View>
             
              <Content  >
              <Grid style={{alignItems: 'center'}}>
                <Col>
                <Item floatingLabel last>
                  <Label>Your service & date</Label>
                  <Input  onChangeText={this.updateFormField('request_content')}/>
                  </Item>
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
              <Jmfooter navigation={this.props.navigation} />
              
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

