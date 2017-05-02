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

import RNHTMLtoPDF from 'react-native-html-to-pdf';

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class Folders extends Component {

constructor(props) {
    super(props);
    this.state = { 
      categories: [],
      toastdata:null,
      utoken:null
    };
     
         
  }

 tick() {
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



  createPDF(data, name) {
    var options = {
      html: '<p>'+data+'</p>', // HTML String

      // ****************** OPTIONS BELOW WILL NOT WORK ON ANDROID **************                              
      fileName: name,          /* Optional: Custom Filename excluded extension
                                    Default: Randomly generated
                                  */


      directory: 'docs',         /* Optional: 'docs' will save the file in the `Documents`
                                    Default: Temp directory
                                  */

      base64: true,               /* Optional: get the base64 PDF value
                                    Default: false
                                 */

      height: 800,               /* Optional: 800 sets the height of the DOCUMENT that will be produced

                                    Default: 612
                                  */
      width: 1056,               /* Optional: 1056 sets the width of the DOCUMENT that will produced
                                    Default: 792
                                  */
      padding: 24,                /* Optional: 24 is the # of pixels between the outer paper edge and
                                            corresponding content edge.  Example: width of 1056 - 2*padding
                                            => content width of 1008
                                    Default: 10
                                  */
    };

    RNHTMLtoPDF.convert(options).then((data) => {
      console.log(data.filePath);
      console.log(data.base64);
    });

    Toast.show({
              text: 'doc created',
              position: 'bottom',
              buttonText: 'Okay'
            })
    
  }




  render() {
    var items = this.state.categories
    //  var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

    return (
     <Container>
        <Image 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover">
                <Content>
                   <View>
      <TouchableOpacity onPress={this.createPDF('<h1>Hello Taha</h1>')}>
        <Text>Create PDF</Text>
      </TouchableOpacity>
    </View>
   <ul>
     {this.state.users.map(function(items, i){
       return <li key={i}>{items.name}</li>
     }}
   </ul>
                    {/*<List dataArray={items}
                        renderRow={(item) =>
                            <Card>
                        <CardItem >
                          <TouchableOpacity onPress={this.createPDF(item.content, item.name)}>
                            <Body>
                                <Text>
                                   {item.name}
                                </Text>
                            </Body>
                            </TouchableOpacity>
                        </CardItem>
                    </Card>
                        }>
                    </List>*/}
                   
                </Content>
                 </Image>
                 <Footer>
                    <FooterTab style={{ backgroundColor: "green"}}>
                        <Button style={{ backgroundColor: "#FFC0CB"}} >
                            <Text style={{color: "#FFF"}} >Faq Notes</Text>
                        </Button>

                        <Button onPress={ () => this._create_cate() }>
                            <Text style={{color: "#FFF"}}>Create Folder</Text>
                        </Button>
                        <Button onPress={()=> this._upload_notes()}>
                            <Text style={{color: "#FFF"}}>Upload Notes</Text>
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