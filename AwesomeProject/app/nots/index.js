import React, { Component } from 'react';
import {Toast, Container, Content, List, ListItem, Text, Card, CardItem, Body,  Footer, FooterTab, Button } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class Nots extends Component {

constructor(props) {
    super(props);
    this.state = { 
      categories: [],
      toastdata:null,
      utoken:null
    };
     
         
  }

 tick() {
    fetch('http://192.168.0.102/fyp/nots', {
                  method: 'GET',
                  headers: {
                  'authorization': this.state.utoken,
                  'Content-Type': 'application/json',
                  }
                  })
                  .then((response) => response.json()) 
                  .then((responseJson) => { 
                    this.setState({categories:responseJson.result})
                  console.log(this.state.categories);
                  if(responseJson.status==0){
                  alert('login first');
                  this._navigateLogin();
                  }

                  }) 
                  .catch((error) => { console.error(error); });
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


_upload_notes(){
    // alert('good');
     this.props.navigator.push({
    name: 'Uploadnotes', // Matches route.name
    
  })
}

_create_cate(){
  this.props.navigator.push({
    name: 'Createcate', // Matches route.name
  })
}

  
_navigateLogin(){
    // alert('good');
     this.props.navigator.push({
    name: 'LoginScreen', // Matches route.name
    
  })
}
 
componentWillMount(){



}

componentDidMount(){
  AsyncStorage.getItem("@MySuperStore:jtoken")
        .then((value) => { 
          // console.log('in ' + value);
        this.setState({"utoken": value});  
                  fetch('http://192.168.0.102/fyp/categories', {
                  method: 'GET',
                  headers: {
                  'authorization': this.state.utoken,
                  'Content-Type': 'application/json',
                  }
                  })
                  .then((response) => response.json()) 
                  .then((responseJson) => { 
                    this.setState({categories:responseJson.result})
                  console.log(this.state.categories);
                  if(responseJson.status==0){
                  alert('login first');
                  this._navigateLogin();
                  }

                  }) 
                  .catch((error) => { console.error(error); });
         } );
 
console.log(this.state.utoken);


}




  render() {
    var items = this.state.categories
    //  var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

    return (
     <Container>
        <Image 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover">
                <Content>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                   {item.category_name}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                        }>
                    </List>
                   
                </Content>
                 </Image>
                 <Footer>
                    <FooterTab style={{ backgroundColor: "green"}}>
                        <Button style={{ backgroundColor: "#FFC0CB"}} >
                            <Text style={{color: "#FFF"}} >Faq Notes</Text>
                        </Button>

                      
                  </FooterTab>
                </Footer>
               
            </Container>
    );
  }
}
const styles = StyleSheet.create({
  
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
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
     backgroundColor: 'transparent',
    alignItems:'center',
  }
});