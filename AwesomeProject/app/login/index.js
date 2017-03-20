import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class LoginScreen extends Component {

_navigate(){
  this.props.navigator.push({
    name: 'SignupScreen', // Matches route.name
  })
}

_login(){
 let username = this.state.name;
 let name = this.state.name
 let emial = this.state.email;
 let password = this.state.password;


    fetch('http://192.168.10.7/fyp/token', {
  method: 'POST',
  headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    email: emial,
    password: password
  })
    }) .then((response) => response.json()) 
    .then((responseJson) => { console.log(responseJson) }) 
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
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}>
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