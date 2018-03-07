import React from 'react';
import { StyleSheet, Text, ScrollView,View, Image, Dimensions, Modal, TouchableOpacity, Button } from 'react-native';

import Header from '../component/header';
import QuizTextInput from '../component/textInput';

export default class RegistrationScreen extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      text: '',
      next: false
    }
  }

  print(){
    // console.log(this.refs.fullName.props.value);
    this.setState({next: true})
  }

  render(){
    return(

      <View style={stylesReg.container}>
        <Header title='JOIN US' image={require('../images/logo.png')}/>
        <ScrollView style={stylesReg.body}>
          <QuizTextInput placeholder={'Full Name'}
            ref='fullName' value={this.state.text}
            onChangeText={(text) => this.setState({text: text})}
          />
          <QuizTextInput placeholder={'Email'} ref='e_mail'/>
          <QuizTextInput placeholder={'Phone'} ref='phone'/>
          <QuizTextInput placeholder={'About (maxLength 150)' }
            multiline={true}
            numberOfLines = {5}
            maxLength = {150}
            ref='about'
          />
          <Button title='Register' onPress={()=>this.print()}/>
        </ScrollView>
        <Modal
         visible={this.state.next}
         animationType='slide'>
          <View style={{flex:1, backgroundColor: 'red'}}>
            <Button title='Close' onPress={()=>this.setState({next:false})}/>
            <Text>{this.state.text}</Text>
          </View>
        </Modal>
      </View>

    )
  }
}

const stylesReg = StyleSheet.create({
  container:{
    backgroundColor: '#DBDCDD',
    flex:1,
  },
  body:{
    padding: 10,
    paddingTop: 25 ,
  }
})
//
