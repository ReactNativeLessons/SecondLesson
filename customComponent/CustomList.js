import React from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Text, TouchableOpacity,Image } from 'react-native';

export class CustomListItemMaker extends React.Component{
  constructor(props){
    super(props)
  }
          //  <Image source={require('../assets/images.png')}/>
  render(){
    return(
      <TouchableOpacity onPress={()=>alert('Hello ' + this.props.name)}>
        <View style={listItemStyle.itemStyle}>

            <Text>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class CustomList extends React.Component{
  constructor(props){
    super(props)
  }
  renderItems(){
    renderItem=(i, name)=>(<CustomListItemMaker  key={i} name={name}/>);
    let items = [];
    for(let i in this.props.listValues){

      items.push(renderItem(i, this.props.listValues[i]))
    }
    return(items)
  }
  render(){
    return(
      <ScrollView style={listStyle.scrollStyle}>
          {this.renderItems()}
      </ScrollView>
    );
  }
}
const width = Dimensions.get('window').width

const listStyle = StyleSheet.create({
  scrollStyle:{
    backgroundColor: 'lightgray',
    width: width,
  }
})

const listItemStyle = StyleSheet.create({
  itemStyle:{
    flex: 1,
    width: width,
    flexDirection: 'column',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: 'lightblue',
    minHeight: 45,
    maxHeight: 50
  }
})
