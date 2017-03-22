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
import UploadForm from "./app/upload/index";
import Folders from "./app/folders/index";
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
   if(route.name == 'SignupScreen') {UploadForm
     return <SignupScreen navigator={navigator} />
   }
   if(route.name == 'UploadForm') {
     return <UploadForm />
   }
   if(route.name == 'Folders') {
     return <Folders navigator={navigator}/>
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
                            initialRoute={{ name: 'Folders' }}
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
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
