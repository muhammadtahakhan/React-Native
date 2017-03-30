import React, { Component } from 'react';
import {Toast} from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  AsyncStorage,
  } from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class LoginScreen extends Component {

constructor(props) {
    super(props);
    this.state = { 
      username: null,
      password:null,
      toastdata:null,
      utoken:null
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

componentWillMount(){

AsyncStorage.getItem("@MySuperStore:jtoken")
        .then((value) =>{ 
          // console.log('in ' + value);
        this.setState({"utoken": value});  
                  fetch('http://192.168.0.103/fyp/users', {
                  method: 'GET',
                  headers: {
                  'authorization': this.state.utoken,
                  'Content-Type': 'application/json',
                  }
                  })
                  .then((response) => response.json()) 
                  .then((responseJson) => { 
                  console.log(responseJson.status);
                  if(responseJson.status!=0){
                  this.props.navigator.push({
                      name: 'Folders', // Matches route.name
                    });
                  }

                  }) 
                  .catch((error) => { console.error(error); });
         });

}



_login(){
  let username = this.state.username;
  let password = this.state.password;


    fetch('http://192.168.0.103/fyp/token', {
  method: 'POST',
  headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password
  })
    }) .then((response) => response.json()) 
    .then((responseJson) => { 
        //  console.log(responseJson);
                   if(responseJson.status!= "0"){
                     
             AsyncStorage.setItem('@MySuperStore:jtoken', responseJson.token);
// try {
//     AsyncStorage.getItem("@MySuperStore:jtoken").then((value) => {
//     console.log(value);
//     });

// } catch (error) {
//       // Error retrieving data
//       console.log("error in async token");
// }
                    this.props.navigator.push({
                name: 'Folders', // Matches route.name
              })
                     }else{
                         this.setState({toastdata: "user not found"});
                         this.showtoast();
                     }
     }) 
    .catch((error) => { console.error(error); });
}




  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="email" 
                placeholderTextColor="#FFF"
                style={styles.input} 
                 onChangeText={(username) => this.setState({username})}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry 
                 onChangeText={(password) => this.setState({password})}
              />
            </View>
            <TouchableOpacity activeOpacity={.5} onPress = {()=>{AsyncStorage.getItem('@MySuperStore:jtoken').then((va)=>{console.log(va)})}}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} onPress={this._login.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText} >Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.signupLinkText} onPress={ () => this._navigate() }>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
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