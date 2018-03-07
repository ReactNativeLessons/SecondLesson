import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,  TouchableOpacity, Button, Modal } from 'react-native';
import RadioButton from './customComponent/RadioButton';
import CustomList from './customComponent/CustomList';

import RegistrationScreen from './quiz/screens/registration';


 // <SectionList style={{width: 200}}
 //  sections={[
 //   {title: 'D', data: [{name: 'Devin'}]},
 //   {title: 'J', data: [{name: 'Jackson'}, {name:'James'}]},
 //  ]}
 //  renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
 //  renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
 //  renderSectionFooter={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
 //  keyExtractor={(item4, index) => index}
 // />
 // <FlatList
 //  data={this.state.data}
 //  keyExtractor={(item, index)=>index}
 //  renderItem={({item})=>(<CustomListItemMaker key = {item} name={item}/>)}
 // />

export class CustomListItemMaker extends React.Component{
  constructor(props){
    super(props)
  }
          //  <Image source={require('../assets/images.png')}/>
  render(){
    return(
      <TouchableOpacity onPress={()=>this.asdf()}>
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
      goApp2: false,
      goApp3: false,
      data: ['Nshan', 'Lusine', 'Ashot', 'Vahe', 'Seda', 'Aramayis', 'Seryoja', 'David', 'Yasha', ]
    }
  }

  pressButton(isSelected){
    this.setState({
      selected: !isSelected ,
    });
    console.log(isSelected)
  }

  goNext(){
    this.setState({goApp2: true})
  }

  returnFromNext(){
    this.setState({goApp2: false})
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
        <Button title='go App2' onPress={()=>this.goNext()}/>
        <Image source={require('./assets/images.png')}/>
        <CustomList style={styles.custList} listValues={this.state.data}
          item = {(i, name)=>(<CustomListItemMaker  key={i} name={name}/>)} />
        <Modal
          visible={this.state.goApp2}
          animationTyle='fade'
          onRequestClose={()=>(console.log('Android or TV IOS'))}>
          <RegistrationScreen />
        </Modal>

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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  custList:{
    paddingTop: 0
  }
});
