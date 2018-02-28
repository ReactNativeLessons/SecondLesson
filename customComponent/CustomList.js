import React from 'react';
import {StyleSheet, ScrollView, View, Dimensions} from 'react-native';

export default class CustomList extends React.Component{
  constructor(props){
    super(props)
  }
  renderItems(){
    renderItem=(i, name)=>(this.props.item(i, name));
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
