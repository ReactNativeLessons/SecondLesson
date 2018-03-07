import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(

      <View style={styles.headerStyle}>
        <Image  style={styles.imgStyle} source={this.props.image}/>
        <Text style={styles.textStyle}>{this.props.title}</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor: '#E98257',
    height: 80,
    width: '100%',
    padding: 15,
    paddingTop:30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgStyle:{
    backgroundColor: '#E98257',
    height: 50,
    width: 45,
    // padding: 30 10,
  },
  textStyle:{
    marginLeft: 10,
    fontSize: 22,
    color: 'white',
  }
})
