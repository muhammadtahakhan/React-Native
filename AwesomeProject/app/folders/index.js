import React, { Component } from 'react';
import {Toast, Container, Content, List, ListItem, Text, Card, CardItem, Body } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class Folders extends Component {

constructor(props) {
    super(props);
    this.state = { 
      username: null,
      password:null,
      toastdata:null
    };
  }
showtoast(){
    // alert(this.state.toastdata);
Toast.show({
              text: this.state.toastdata,
              position: 'bottom',
              buttonText: 'Okay'
            })
}


_navigate(){
  this.props.navigator.push({
    name: 'SignupScreen', // Matches route.name
  })
}

  
_navigateLogin(){
    // alert('good');
     this.props.navigator.push({
    name: 'LoginScreen', // Matches route.name
    
  })
}

componentDidMount(){


    fetch('http://192.168.0.102/fyp/users', {
  method: 'GEt',
  headers: {
    'authorization': AsyncStorage.getItem('@MySuperStore:jtoken'),
    'Content-Type': 'application/json',
  }
    }) .then((response) => response.json()) 
    .then((responseJson) => { 
         console.log(responseJson.status);
         if(responseJson.status==0){
           alert('login first');
           this._navigateLogin();
         }
         
            //        if(responseJson.status!= "0"){
            //  AsyncStorage.setItem('@MySuperStore:jtoken', responseJson.token);
            //     this.props.navigator.push({
            //     name: 'UploadForm', // Matches route.name
            //   })
            //          }else{
            //              this.setState({toastdata: "user not found"});
            //              this.showtoast();
            //          }
     }) 
    .catch((error) => { console.error(error); });
}




  render() {
     var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

    return (
     <Container>
                <Content>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                   {item}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                        }>
                    </List>
                   
                </Content>
            </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});