/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>home</Title>
                    </Body>
                    <Right />
                </Header>
                  <Content>
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: 200  }}></Col>
                    </Grid>
                </Content>
                 <Footer>
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
                </Footer>
            </Container>
    );
  }
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
