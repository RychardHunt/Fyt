import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated,FlatList } from "react-native";
var starting=[0,200,400,700];
var ending=[100,300,500,900];
class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      viewheight:this.props.viewheight
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);
    
    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
          
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (this.isDropArea(gesture)) {
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                showDraggable: false
              })
            )
          }
          console.log("x=")
          console.log(this.state.pan.y) 
          console.log("y=")
          console.log(this.state.pan.x) 
        }
      });
  }

  isDropArea(gesture) {
    //return gesture.moveY < 200;
  }

  render() {
    
    return (
      <View style={{ height:this.state.viewheight, width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
          />
        </View>
      );
    }
  }
}


class FilledTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rectanglestart:this.props.begin,
      rectangleend:this.props.end,
      viewheight:this.props.viewheight
    };
  }
  render() {
      let length=this.state.rectangleend-this.state.rectanglestart;
      return (<View style={{height:this.state.viewheight, position: "absolute" }}>
        <View style={{width:'100%',height:this.state.rectanglestart}}>
        </View>
        <View style={{height:length, backgroundColor:'red'}}>
          </View>
          <View style={{width:1000}}></View>
        </View>
      );
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.row}>
      <View>
      </View>
        </View>
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  rectangle: {
    backgroundColor: "skyblue",
    width: 1000,
    height: CIRCLE_RADIUS * 2,
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});