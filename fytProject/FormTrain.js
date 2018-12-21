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
      <Card style={{backgroundColor:'pink'}}>
      <Text style={styles.textView}>Please Input {this.state.nameholder[this.state.counter]}</Text>
	<View style={{backgroundColor:'#ff2216'}}>
      <TextInput style={styles.textInputView}
      
    onChangeText={(statistic) => this.setState({statistic})}
    value={this.state.statistic}
      placeholder="Type here"/>

 <TouchableOpacity text="Submit" style={styles.buttonView} onPress={this.handleClick} title="Submit">
<Text style={styles.textViewtwo}>Submit</Text>

</TouchableOpacity>
	</View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	
    alignItems: 'center',
    justifyContent: 'flex-start',
backgroundColor:'#f98b7a',
    
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
minWidth:1000,
backgroundColor:'#f98b7a',},

textView:{
width:'100%',
height:60,
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
margin:10,
height:80,
fontSize:30,
backgroundColor:'#f98b7a',
color:'#FFFFFF',},

buttonView:{
width:'40%',
height:45,
marginLeft:'50%',
marginTop:10,
marginBottom:10,
textAlign:'center',
backgroundColor:'#FA5845',
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