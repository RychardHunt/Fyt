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
  inputholder:[],
},


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
	let percent=(this.state.counter/this.state.nameholder.length)*100;
percent=percent.toString()+"%";
    console.log(this.state.counter);
console.log(percent);
console.log(this.state.inputholder);

    return (
      <Card style={{backgroundColor:'pink'}}>
<View style={{flexDirection:"row"}}>

      <Text style={styles.textView}>Please Input {this.state.nameholder[this.state.counter]}</Text>

<TouchableOpacity text="Submit" style={styles.buttonView} onPress={this.handleClick} title="Submit">

<Text style={styles.textViewtwo}>Submit</Text>

</TouchableOpacity>

</View>

<View style={{width:percent,backgroundColor:'#3cc11f',height:"2%",marginTop:"1%",marginBottom:"1%",
}}></View>

<Text>{this.state.nameholder[this.state.counter]}</Text>

	<View style={{backgroundColor:'#ffffff'}}>

      <TextInput style={styles.textInputView}
    onChangeText={(statistic) => this.setState({statistic})}
    value={this.state.statistic}
      placeholder="Type here"/>

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
width:'80%',
height:50,
backgroundColor:'#FA5845',
textAlign:'left',
fontSize:20,
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
height:40,
fontSize:20,
backgroundColor:'#e5e5e5',
color:'#FFFFFF',},


buttonView:{
width:'20%',
height:50,
textAlign:'center',
backgroundColor:'#FA5845',
alignItems: 'center',
color:'#FFFFFF',},

innerView:{width:'100%',
height:'20%',
},

textViewtwo:{
fontSize:20,
color:'#FFFFFF',}
});