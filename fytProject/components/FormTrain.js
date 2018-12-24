import * as React from 'react';
import {  StyleSheet, Image,TextInput} from 'react-native';
import {Button,Card,Text,View,Form,Item,Input} from 'native-base';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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
this.handleBackClick = this.handleBackClick.bind(this);
}


onSwipeRight(gestureState){
if(this.state.counter>0){
this.setState({
counter:this.state.counter-1,
});
}}
onSwipeLeft(gestureState){
console.log(this.props.name);
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



handleClick(event) {
console.log(this.props.name);
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


handleBackClick(event){
if(this.state.counter>0){
this.setState({
counter:this.state.counter-1,
});
}}



  render() {
	let percent=(this.state.counter/this.state.nameholder.length)*100;
percent=percent.toString()+"%";
    console.log(this.state.counter);
console.log(percent);
console.log(this.state.inputholder);
   const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
 <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        
        >





      <Card>
<View style={{flexDirection:"row"}}>

<Button text="Back" style={styles.buttonView} onPress={this.handleBackClick} title="Back" name="Back">
<Text style={styles.textViewtwo}>Back</Text>
</Button>
      <Text style={styles.textView}>Please Input {this.state.nameholder[this.state.counter]}</Text>

<Button text="Submit" style={styles.buttonView} onPress={this.handleClick} title="Submit" name="Submit">

<Text style={styles.textViewtwo}>Submit</Text>

</Button>

</View>

<View style={{width:percent,backgroundColor:'#3cc11f',height:"2%",marginTop:"1%",marginBottom:"1%",
}}></View>

<Text style={{fontSize:30}}> {this.state.nameholder[this.state.counter]}</Text>

	<View style={{backgroundColor:'#ffffff'}}>
<Form>
<Item>
      <Input style={styles.textInputView}
    onChangeText={(statistic) => this.setState({statistic})}
    value={this.state.statistic}
      placeholder="Type here"/>
</Item>
</Form>
	</View>

      </Card>
</GestureRecognizer>

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
width:'50%',
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
fontSize:30,
backgroundColor:'#e5e5e5',
color:'#FFFFFF',},


buttonView:{
width:'25%',
height:50,
textAlign:'center',
backgroundColor:'#FA5845',
alignItems: 'center',
color:'#FFFFFF',},

innerView:{width:'100%',
height:'20%',
},

textViewtwo:{
fontSize:15,
color:'#FFFFFF',}
});