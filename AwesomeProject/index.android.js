/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Toast, Container, Header, Title, Button, Left, Right, Body, Icon, Content, Footer, FooterTab, Drawer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import LoginScreen from "./app/login/index";
import SignupScreen from "./app/signup/index";
import Nots from './app/nots/index';

import Uploadnotes from "./app/upload_notes/index";
import Folders from "./app/folders/index";
import Folders2 from "./app/folders2/index";
import Createcate from "./app/create_category/index";
import Slider from './app/slider'
import {
    Navigator,
    TouchableOpacity,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';




export default class AwesomeProject extends Component {
     constructor(props) {
  super(props);
  this.state = {
    showToast: false,
    toastdata : "Hello Taha khan",
     date: ''
  }
}

renderScene(route, navigator) {
    
   if(route.name == 'LoginScreen') {
     return <LoginScreen navigator={navigator} />
   }
   if(route.name == 'SignupScreen') {
     return <SignupScreen navigator={navigator} />
   }
 
   if(route.name == 'Folders') {
     return <Folders navigator={navigator}/>
   }

    if(route.name == 'Stu') {
     return <Folders2 navigator={navigator}/>
   }
  
    if(route.name == 'Createcate') {
     return <Createcate navigator={navigator}/>
   }
   if(route.name == 'Uploadnotes') {
     return <Uploadnotes navigator={navigator}/>
   }
    if(route.name == 'Nots') {
     return <Nots navigator={navigator}/>
   }
}

showtoast(){
    // alert(this.state.toastdata);
Toast.show({
              text: this.state.toastdata,
              position: 'bottom',
              buttonText: 'Okay'
            })
}

  render() {
     
    return (
      <Container>
        
              {/*<Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>home</Title>
                    </Body>
                    <Right />
                </Header>*/}
                  {/*<Content>*/}
                      {/*<TouchableOpacity onPress={ () => this._navigate() }>
    <Text>GO To View</Text>
</TouchableOpacity>*/}
            
                      <Navigator
                            style={{ flex:1 }}
                            initialRoute={{ name: 'LoginScreen' }}
                            renderScene={ this.renderScene.bind(this) } 
                            configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                            />
                          
                      {/*<LoginScreen />
                     <SignupScreen /> */}
                  
                   {/*</Content>*/}
                 {/*<Footer>
                   <FooterTab>
                        <Button>
                            <Text>Apps</Text>
                        </Button>
                        <Button>
                            <Text>Camera</Text>
                        </Button>
                        <Button active>
                            <Text>Navigate</Text>
                        </Button>
                        <Button>
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>*/}
            </Container>
    );
  }


  //  componentWillMount() {
  //   fetch("http://192.168.0.101/fyp/user/2")
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log('a');
  //       this.setState({date: responseData.result});
  //     })
  //     .done();
  // }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
