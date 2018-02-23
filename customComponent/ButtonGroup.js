import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';

export default class  ButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  // selectedIndex
  componentWillMount() {
    const {selectedIndex} = this.props
      this.setState({currentIndex: selectedIndex})
  }

  updateSelectedIndex(index) {
    this.setState({currentIndex: index})
    this.props.changeValue(index)
    this.props.selectedIndex = index
  }

  renderButtons(){
    const {style, size, titles, tintColor, titleColor, selectedIndex} = this.props

    let buttonDefaultStyle = {
      flex: 1,
      color: tintColor,
      fontSize: size,
      marginRight: 15,
      backgroundColor: 'transparent'
    }

    let buttonDefaultStyleSelected = {  flex: 1,
      color: 'white',
      fontWeight: '800',
      fontSize: size,
      marginRight: 15,
      backgroundColor: tintColor
    }

    let btnTitles = titles;
    let buttons = [];

    button = (title, index)=>(
      <TouchableOpacity key={index} onPress={()=>this.updateSelectedIndex(index)}>
        <Text style={index == this.state.currentIndex ? buttonDefaultStyleSelected : buttonDefaultStyle}>{title}</Text>
      </TouchableOpacity>
    )

    for (var index in btnTitles) {
      if (btnTitles.hasOwnProperty(index)) {
          let btn = button(btnTitles[index], index);
          buttons.push(btn);
      }
    }

    return(
      buttons
    )
  }

  render() {
    const {style, titles, tintColor, titleColor, selectedIndex} = this.props

    return(
      <View style={{height: 50,
         flexDirection: 'row',
          backgroundColor: 'yellow',
          alignSelf:'center',
            justifyContent:'space-between'}}>
      {this.renderButtons()}
      </View>
    );
  };
}

ButtonGroup.propTypes = {
  style: ViewPropTypes.style,
  titles: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
  titleColor: PropTypes.string,
  tintColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  selectedIndex: PropTypes.number,
  size: PropTypes.number,
  changeValue: PropTypes.func,
}

ButtonGroup.defaultProps = {
  style: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  titles: ['title'],
  titleColor: 'gray',
  tintColor: 'black',
  backgroundColor: 'transparent',
  selectedIndex: 0,
  size: 15,
}
