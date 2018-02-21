import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RadioButton from './customComponent/RadioButton';
import CustomList from './customComponent/CustomList';

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
        <CustomList style={styles.custList} listValues={this.state.data}/>
      </View>
    );
  }
}

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
