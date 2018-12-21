import * as React from 'react';
import { Text, View, StyleSheet, Image,Input,Form,TextInput,TouchableOpacity} from 'react-native';
import { Button,Card } from 'react-native-material-ui';

export default class FormTrain extends React.Component {
  constructor(props) {
  super(props);
  this.state = {isToggleOn: true,
    statistic:"",
  counter:0,
typeholder:this.props.type,
  nameholder:this.props.name,
  inputholder:[]};
  this.handleClick = this.handleClick.bind(this);
}
handleClick() {
let tempholder=this.state.inputholder.slice()
tempholder[this.state.counter]=this.state.statistic;
if(this.state.counter<this.state.nameholder.length-1){
  this.setState({
      inputholder:tempholder,counter:this.state.counter+1,
	statistic:"",
    });
console.log("condition working");}
else{
this.setState({
      inputholder:tempholder,counter:this.state.counter+1,
	statistic:"",
    });
console.log("Go to next screen");
}
  }

  render() {
    console.log(this.state.counter);
console.log(this.state.inputholder);

    return (
      <View style={styles.container}>
      <Text style={styles.textView}>Please Input {this.state.nameholder[this.state.counter]}</Text>
	<View style={styles.innerView}>
      <TextInput style={styles.textInputView}
      
    onChangeText={(statistic) => this.setState({statistic})}
    value={this.state.statistic}
      placeholder="Type here"/>
 <TouchableOpacity text="Submit" style={styles.buttonView} onPress={this.handleClick} title="Submit">
<Text style={styles.textViewtwo}>Submit</Text>
</TouchableOpacity>
	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  span: {
    height: 128,
    width: 128,
  },
cardView:{
minWidth:1000,},

textView:{
width:'100%',
height:'10%',
backgroundColor:'#FA5845',
textAlign:'center',
fontSize:30,
padding:'2%',
color:'#FFFFFF',},

inputView:{
width:'100%',
height:'10%',
backgroundColor:'#FA5845',
color:'#FFFFFF',
alignItems: 'center',
},

textInputView:{
height:80,
fontSize:30,
borderBottomWidth:2,
borderBottomColor:'#999999'},

buttonView:{
width:'40%',
height:'30%',
marginLeft:'50%',
marginTop:10,
textAlign:'center',
backgroundColor:'#efc25f',
alignItems: 'center',
color:'#FFFFFF',},

innerView:{width:'100%',
height:'20%',
backgroundColor:'#dddddd',
},

textViewtwo:{
padding:10,
color:'#FFFFFF',}

});