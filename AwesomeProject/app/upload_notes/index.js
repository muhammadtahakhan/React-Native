import React, { Component } from 'react';
import ModalPicker from 'react-native-modal-picker'
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

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

export default class Uploadnotes extends Component {

constructor(props) {
    super(props);
    this.state = { 
      name: null,
      category_id: null,
      meta_date:null,
      notes:null

         };
  }

    
_faq_notes(){
    // alert('good');
     this.props.navigator.push({
    name: 'Folders', // Matches route.name
    
  })
}
_create_cate(){
  this.props.navigator.push({
    name: 'Createcate', // Matches route.name
  })
}
_create(){
 let name = this.state.name;
 console.log(name);
    fetch('http://172.23.160.190/fyp/categoty', {
  method: 'POST',
  headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    category_name:name,
   
  })
    }) 
    // .then(  (response) => response.json()  ) 
    .then((responseJson) => { 
      console.log(responseJson);
       this.props.navigator.push({
    name: 'Folders', // Matches route.name
    
  })
    
     }) 
    // .catch((error) => { console.error(error); });
}

  render() {
     let index = 0;
        const data = [
           
            { key: index++, label: 'Red Apples' },
            { key: index++, label: 'Cherries' },
            { key: index++, label: 'Cranberries' },
            { key: index++, label: 'Pink Grapefruit' },
            { key: index++, label: 'Raspberries' },
        
            { key: index++, label: 'Beets' },
            { key: index++, label: 'Red Peppers' },
            { key: index++, label: 'Radishes' },
            { key: index++, label: 'Radicchio' },
            { key: index++, label: 'Red Onions' },
            { key: index++, label: 'Red Potatoes' },
            { key: index++, label: 'Rhubarb' },
            { key: index++, label: 'Tomatoes' }
        ];
    return (
      <View style={styles.container}>
        <Image 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover">
           <View style={styles.headerContainer}>

           

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Upload New Faq Notes</Text>
            </View>
           
          </View>
          
          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
               </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Faq Note Name"
                ref="name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent' 
                 onChangeText={(name) => this.setState({name})}
                
              />

              
              
            </View>
            
             <View style={{flex:1,  padding:20}}>
                <ModalPicker
                    data={data}
                    initValue="Select Category!"
                    onChange={(option)=>{ this.setState({textInputValue:option.label, category_id:option.key});  alert(option.key);}}>
                    <TextInput
                        style={{color: 'white', borderWidth:1, borderColor:'#ccc', padding:10, height:60}}
                        editable={false}
                        placeholder="Select Category!"
                        value={this.state.textInputValue} />
                        
                </ModalPicker>
            </View>
           </View>

          <View style={styles.footerContainer}>

        
           <TouchableOpacity activeOpacity={.5}  onPress={this._create.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText} >Create</Text>
              </View>
            </TouchableOpacity>
          </View>
             
          <Footer>
                    <FooterTab style={{ backgroundColor: "#FF3366"}}>
                        <Button  onPress={ () => this._faq_notes() }>
                            <Text style={{color: "#FFF"}} >Faq Notes</Text>
                        </Button>

                        <Button onPress={()=> this._create_cate()}>
                            <Text style={{color: "#FFF"}}>Create Category</Text>
                        </Button>
                        <Button style={{ backgroundColor: "#FFC0CB"}}>
                            <Text style={{color: "#FFF"}}>Upload Notes..</Text>
                        </Button>
                  </FooterTab>
                </Footer>
         
        </Image>
                
      </View>
    );
  }

}


let styles = StyleSheet.create({
   bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  container: {
    flex: 1,
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
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: 'white'
  }
})