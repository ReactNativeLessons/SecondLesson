import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';

import App3 from './App3';

export default class App2 extends React.Component {

 constructor(props){
   super(props);
   this.state = {
     nameInputText: '',
     aboutInputText: '',
     goApp3: false,
   }
 }
 goNext(){
   this.setState({goApp3: true})
 }

 returnFromNext(){
      this.setState({goApp3: false})
 }

  render() {
    return (
      <View style={styles.container}>
        <Text>App screen 2</Text>

        <TextInput
        style={styles.nameInputStyle}
        onChangeText={(text) => this.setState({nameInputText: text})}
        value={this.state.nameInputText}
        placeholder='Type your name'
        />
        <TextInput
        style={[styles.nameInputStyle, {marginTop: 10, height: 100}]}
        editable = {true}
        maxLength = {150}
        multiline = {true}
        numberOfLines = {5}
        onChangeText={(text) => this.setState({aboutInputText: text})}
        value={this.state.aboutInputText}
        placeholder='Write about you'
        />
        <Button title ='Next' onPress={()=>this.goNext()}/>
        <Button title ='Close' onPress={()=>this.props.close()}/>

        <Modal
          visible={this.state.goApp3}
          animationTyle='slide'
          onRequestClose={()=>(console.log('Android or TV IOS'))}>
          <App3 name={this.state.nameInputText} aboutYou={this.state.aboutInputText}
            close={()=>this.returnFromNext()}/>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  nameInputStyle: {
    height: 30,
    width: 200,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white'}

});
