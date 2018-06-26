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
  FooterTab, Text, Badge ,Grid, Col,List, ListItem, Left
} from 'native-base';
import { navigationOptions, navigation } from 'react-navigation';
import {API_URL} from './../../utilities/Globals';
import  Jmheader from './../../components/jmheader'
// import Jmfooter from './../../components/jmfooter';


type Props = {};
export default class HousesList extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
   
    this.state = {isLoading: true, houses : []}
  }

  componentDidMount(){
    return fetch(API_URL+'houses')
      .then((response) => response.json())
      .then((responseJson) => {


      this.setState({
        isLoading: false,
        houses: responseJson,
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
          <Jmheader title="list of houses" navigation={this.props.navigation} />
     
         
     
              <Content  >
              <Grid style={{alignItems: 'center'}}>
                <Col>
                <List>

                {this.state.houses.map((r,i) => <ListItem key={i} onPress={() => this.props.navigation.navigate('PayCharges',{address:r.address, users_id:r.id})}>
                  <Text>{r.address}</Text>
                  </ListItem>
                )}
                  
               
                </List>
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

