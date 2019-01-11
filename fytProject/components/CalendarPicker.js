import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text, View, Form, Item, Input } from 'native-base';

import Expo, { Calendar } from 'expo';
import TimePicker from 'react-native-simple-time-picker';
import DatePicker from 'react-native-datepicker';
// You can import from local files

// or any pure javascript modules available in npm

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '2019-01-01', hour: 0, minute: 0, text: 'Exercise:' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonId) {
    this.setState({
      text: this.state.text + buttonId
    });

    console.log('text added');
  }

  async addEvent() {
    console.log('pressed');

    var permission = await Expo.Permissions.askAsync('calendar');
    console.log(permission);
    var finaldate = new Date(this.state.date);
    finaldate = new Date(finaldate.setTime(finaldate.getTime() + 1 * 86400000));
    finaldate.setHours(this.state.hour);
    finaldate.setMinutes(this.state.minute);
    var cal = await Expo.Calendar.getCalendarsAsync();
    console.log(this.state.date);
    var eventi = await Expo.Calendar.createEventAsync(Expo.Calendar.DEFAULT, {
      startDate: finaldate,
      endDate: finaldate,
      title: this.state.text,
      timeZone: 'GMT-5'
    })
      .then(event => {
        console.log('success', event);
      })
      .catch(error => {
        console.log('failure', error);
      });

    console.log('after createEventAsync'); //it never gets here on snack, throws date error in app
  }

  render() {
    return (
      <Card style={styles.container}>
        <Text style={styles.paragraph}>Pick date:</Text>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2000-01-01"
          maxDate="2020-12-21"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
        <Text style={styles.paragraph}>Pick time(Hour:0-24 Minute:0-60):</Text>
        <TimePicker
          style={styles.timePicker}
          hour={this.state.hour}
          //initial Hourse value
          minute={this.state.minute}
          //initial Minutes value
          onChange={(hours, minutes) =>
            this.setState({ hour: hours, minute: minutes })
          }
        />
        <Text style={styles.paragraph}>Add exercises</Text>
        <View>
          <Button
            style={styles.buttonView}
            title="Add Exercise 0"
            onPress={() => this.handleClick(0)}
          >
            <Text>Add Exercise 0</Text>
          </Button>
          <Button
            style={styles.buttonView}
            title="Add Exercise 1"
            onPress={() => this.handleClick(1)}
          >
            <Text>Add Exercise 1</Text>
          </Button>
          <Button
            style={styles.buttonView}
            title="Add Exercise 2"
            onPress={() => this.handleClick(2)}
          >
            <Text>Add Exericse 2</Text>
          </Button>
          <Button
            style={styles.buttonView}
            title="Add Exercise 3"
            onPress={() => this.handleClick(3)}
          >
            <Text>Add Exercise 3</Text>
          </Button>
        </View>
        <Text style={styles.paragraph}>Current exercises</Text>
        <View style={styles.exerciseBox}>
          <Text style={styles.paragraph}>{this.state.text}</Text>
        </View>
        <Text style={styles.paragraph}>Submit event to calendar</Text>
        <View>
          <Button
            style={styles.buttonView}
            title="Add Event"
            onPress={this.addEvent.bind(this)}
          >
            <Text>Add Event</Text>
          </Button>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  buttonView: { backgroundColor: '#FA5845' },
  textInputView: {
    margin: 10,
    height: 40,
    width: 100
  },
  timePicker: {
    width: '50%'
  },
  exerciseBox: {
    width: '100%',
    backgroundColor: 'white'
  }
});
