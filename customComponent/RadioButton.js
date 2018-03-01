import React from 'react';
import { View ,StyleSheet, TouchableOpacity} from 'react-native';

export default class RadioButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bgColor: this.props.selected ? this.props.tintColor : '#fff'
    }
  }

  clickRadioButton(){
    if(this.state.bgColor == this.props.tintColor){
      this.setState({
        bgColor:'#fff'
      });
      this.props.click(false);
      this.props.selected = false
    }else{
      this.setState({
        bgColor:this.props.tintColor
      });

      this.props.click(true);
      this.props.selected = true
    }
  }

  render(){
    return(
      <TouchableOpacity
      onPress={ this.clickRadioButton.bind(this)}
        >
      <View style={[radioButtonStyle.cotener, {borderColor : this.props.tintColor}]}>
        <View style={[radioButtonStyle. ChildCotener, {backgroundColor: this.state.bgColor}]} />

       </View>
       </TouchableOpacity>
    );
  }
}

const radioButtonStyle = StyleSheet.create({
  cotener:{
    width: 40,
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: '#a29',
    borderRadius: 20

  },
  ChildCotener:{
    width: 28,
    height: 28,
    borderRadius: 14

  }

});
