import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,  TouchableOpacity } from 'react-native';
import RadioButton from './customComponent/RadioButton';
import CustomList from './customComponent/CustomList';

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

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected: false,
      data: ['Nshan', 'Lusine', 'Ashot', 'Vahe', 'Seda', 'Aramayis', 'Seryoja', 'David', 'Yasha', ]
    }
  }

  pressButton(isSelected){
    this.setState({
      selected: !isSelected ,
    });
    console.log(isSelected)
  }

  render() {

    let text_ =  this.state.selected ? "RadioButton is selected" : "RadioButton is not selected"

    return (
      <View style={styles.container}>
        <Text> {text_} </Text>
        <RadioButton
          tintColor = 'blue'
          selected = {this.state.selected}
          click = {()=>this.pressButton(this.state.selected)}
          />
        <Image source={require('./assets/images.png')}/>
        <CustomList style={styles.custList} listValues={this.state.data}
          item = {(i, name)=>(<CustomListItemMaker  key={i} name={name}/>)} />
      </View>
    );
  }
}

const width = Dimensions.get('window').width

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

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  custList:{
    paddingTop: 0
  }
});
