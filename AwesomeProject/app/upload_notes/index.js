import React, { Component } from 'react';
import ModalPicker from 'react-native-modal-picker';
// import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
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

const FilePickerManager = require('NativeModules').FilePickerManager;

export default class Uploadnotes extends Component {

constructor(props) {
    super(props);
    this.state = { 
      name: null,
      category_id: null,
      meta_date:null,
      notes:null,
      file:null
     

         };
  }
  showtoast(){
    // alert(this.state.toastdata);
Toast.show({
              text: 'Notes Uploaded',
              position: 'bottom',
              buttonText: 'Okay'
            })
}
 selectPhotoTapped() {
    const options = {
      title:"Select File to Upload",
      mediaType:"mixed",
      // quality: 1.0,
      // maxWidth: 500,
      // maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    FilePickerManager.showFilePicker(null, (response) => {
  console.log('Response = ', response);
 
  if (response.didCancel) {
    console.log('User cancelled file picker');
  }
  else if (response.error) {
    console.log('FilePickerManager Error: ', response.error);
  }
  else {
    console.log(response);
    console.log(response.uri);
    this.setState({
      file: response
    });
    // this.Upload_now();
  }
});
  }

  Upload_now(){
    this.showtoast();
     this.props.navigator.push({
    name: 'Folders', // Matches route.name
    
  })
  //    RNFetchBlob.fetch('POST', 'http://192.168.0.104/fyp/faqnotes', {
  //   // Authorization : "Bearer access-token",
  //   otherHeader : "foo",
  //   'Content-Type' : 'multipart/form-data',
  // }, [
   
  // { name : 'name', data : 'name of notes'},
  // { name : 'category_id', data : '10' },
  //  { name : 'notes', data: RNFetchBlob.wrap(RNFetchBlob.fs.readFile(this.state.file.uri)) },
      
  // ]).then((resp) => {
  //   console.log(resp);
  // }).catch((err) => {
  //   console.log(err);
  // })

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
                style={[styles.input]}
                placeholder="Faq Note Name"
                ref="name"
                placeholderTextColor="black"
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
        
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
        <Text>Select a File</Text>
          </View>
        </TouchableOpacity>

          <View style={styles.footerContainer}>

        
           <TouchableOpacity activeOpacity={.5}  onPress={this.Upload_now.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText} >Upload Notes</Text>
              </View>
            </TouchableOpacity>
          </View>
          
             
          <Footer>
                    <FooterTab style={{ backgroundColor: "green"}}>
                        <Button  onPress={ () => this._faq_notes() }>
                            <Text style={{color: "#FFF"}} >Faq Notes</Text>
                        </Button>

                        <Button onPress={()=> this._create_cate()}>
                            <Text style={{color: "#FFF"}}>Create Folder</Text>
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
    backgroundColor: "green",
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