import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class App3 extends React.Component {

constructor(props){
  super(props);
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{this.props.name}</Text>
        <Text style={styles.textStyle} >{this.props.aboutYou}</Text>
        <Button title ='Close' onPress={()=>this.props.close()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#ffc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 20,
  }

});
