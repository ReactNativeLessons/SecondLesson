import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';



export default class QuizTextInput extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var height_COST = this.props.multiline ? 100 : 30;
    return(

      <TextInput style={[styles.inputs,{height: height_COST}]} {...this.props} />

    )
  }
}

const styles = StyleSheet.create({
  inputs:{
    backgroundColor:'white',
    borderRadius: 3,
    padding: 5,
    paddingLeft: 10,
    marginBottom: 15 ,
  }
})
