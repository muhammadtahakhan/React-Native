import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

export default class SignupVriew extends Component {

 constructor(props) {
    super(props);
    this.state = { 
      name: null,
      email: null,
      password:null
    };
  }

    
_navigate(){
    // alert('good');
     this.props.navigator.pop({
    name: 'LoginScreen', // Matches route.name
    
  })
}

_signup(){
 let username = this.state.email;
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
    name: name,
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
        <Image 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}  >
              <TouchableOpacity style={styles.headerBackButtonView} onPress={ () => this._navigate() }>
                <Image 
                  source={backIcon} 
                  style={styles.backButtonIcon} 
                  resizeMode="contain"
                 
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Name"
                ref="name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent' 
                 onChangeText={(name) => this.setState({name})}
                
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={emailIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF" 
                onChangeText={(email) => this.setState({email})}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={lockIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.whiteFont]}
                placeholder="Password"
                placeholderTextColor="#FFF" 
                onChangeText={(password) => this.setState({password})}
              />
            </View>

            {/*<View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={birthdayIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Birthday"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent' 
              />
            </View>*/}

          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity onPress={this._signup.bind(this)}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}  >Join</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    // marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    alignItems:'center',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})