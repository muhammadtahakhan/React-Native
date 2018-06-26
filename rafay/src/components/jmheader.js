/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header,Body, Left, Title, Text, Button, Right, Container } from 'native-base';

type Props = {};

export default class Jmheader extends Component<Props> {
  constructor (props) {
    super(props)
    
    this.logout = this.logout.bind(this);
  }
  logout = function(value) {
    // AsyncStorage.setItem("users_id", value)
    global.users_id = '' ;
    this.props.navigation.navigate('Auth');
   
}
  render() {
    let logout;
    if (this.props.title != 'Login'){  
      logout = <Text>lgoout</Text>;
   }
    return (
    // <Container>
    //           <Header ><Title>{this.props.title}</Title> <Right>
    //           <Button onPress={this.logout} hasText transparent>
    //             <Text>Cancel</Text>
    //           </Button>
    //         </Right></Header>
    //         </Container>


<Header>
  
  <Body>
    <Title>{this.props.title}</Title>
  </Body>
  <Right>
  
    <Button onPress={this.logout} hasText transparent hasText transparent>
  {logout}
    </Button>
  
  </Right>
</Header>

      );
  }
}



const styles = StyleSheet.create({
  
});

