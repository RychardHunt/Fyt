import * as React from 'react';
import {
  StyleSheet,
  PanResponder,
  Animated,
  Alert,
} from 'react-native';
import { Button, Card, Text, View, Form, Item, Input } from 'native-base';
import { Constants, Calendar, Permissions } from 'expo';
import {
  Calendar as CalendarWix,
  CalendarList,
  Agenda,
} from 'react-native-calendars';
import TimePicker from 'react-native-simple-time-picker';

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ key: 1, start: 0, end: 0 }],
      date: '2019-01-01',
      hour: 0,
      minute: 0,
      durationhour: 0,
      durationminute: 0,
      text: '',
      showSchedule: false,
    };
  }

  getScheduleObjects(calendarday) {
    console.log('function start');
    var container = [];
    for (var i = 0; calendarday.length; i++) {
      var datestart = calendarday[i].startDate;
      var dateend = calendarday[i].endDate;
      datestart = new Date(datestart);
      dateend = new Date(dateend);
      datestart = new Date(datestart);
      var dateendseconds = (dateend.getTime() / 1000 - 18000) % 86400;
      var datestartseconds = (datestart.getTime() / 1000 - 18000) % 86400;
      console.log('datestart = ' + datestartseconds);
      var dateobject = {
        key: i + 1,
        start: datestartseconds,
        end: dateendseconds,
      };
      container.push(dateobject);

      if (i == calendarday.length - 1) {
        console.log(container);
        this.setState({ users: container });
      }
    }
    console.log(calendarday.length);
    if (calendarday.length == 0) {
      this.setState({ users: [{ key: 1, start: 0, end: 0 }] });
    }
  }

  async addEvent() {
    if (this.insertCalendarEvent()) {
      var permission = await Permissions.askAsync('calendar');
      var finaldate = new Date(this.state.date);
      finaldate = new Date(
        finaldate.setTime(finaldate.getTime() + 1 * 86400000)
      );
      finaldate.setHours(this.state.hour);
      finaldate.setMinutes(this.state.minute);
      var endingdate = new Date(
        finaldate.getTime() +
          parseFloat(JSON.stringify(this.state.durationhour)) * 3600000 +
          parseFloat(JSON.stringify(this.state.durationminute)) * 60000
      );
      var cal = await Calendar.getCalendarsAsync();
      var eventi = await Calendar.createEventAsync(Calendar.DEFAULT, {
        startDate: finaldate,
        endDate: endingdate,
        title: this.state.text,
        timeZone: 'GMT-5',
      })
        .then(event => {
        })
        .catch(error => {
        });
    } else {
    }
  }

  async getEvent() {
    var permission = await Permissions.askAsync('calendar');
    var contain = await Calendar.getCalendarsAsync();
    console.log(contain);
    var begindate = new Date(this.state.date);
    begindate = new Date(begindate.setTime(begindate.getTime() + 1 * 86400000));
    begindate.setHours(0);
    begindate.setMinutes(0);
    var enddate = new Date(this.state.date);
    enddate = new Date(enddate.setTime(begindate.getTime() + 1 * 86400000));
    var idarray = [];
    for (var i = 0; i < contain.length; i++) {
      idarray.push(contain[i].id);
    }
    var calendarholder = [];
    const eventi = await Calendar.getEventsAsync(
      idarray,
      begindate,
      enddate
    ).then(result => (calendarholder = result));
    const finalholder = this.getScheduleObjects(calendarholder);
  }

  insertCalendarEvent() {
    this.getEvent;
    var starttime =
      parseFloat(JSON.stringify(this.state.hour)) * 3600 +
      parseFloat(JSON.stringify(this.state.minute) * 60);
    var endtime =
      starttime +
      parseFloat(JSON.stringify(this.state.durationhour)) * 3600 +
      parseFloat(JSON.stringify(this.state.durationminute)) * 60;
    var pass = true;
    for (var i = 0; i < this.state.users.length; i++) {
      const userstart = parseFloat(JSON.stringify(this.state.users[i].start));
      const userend = parseFloat(JSON.stringify(this.state.users[i].end));
      console.log('start + ' + userstart);
      console.log('end + ' + userend);
      if (userstart > starttime && userstart < endtime) {
        pass = false;
        console.log('one');
      }
      if (userend > starttime && userend < endtime) {
        pass = false;
        console.log('two');
      }
      if (starttime > userstart && starttime < userend) {
        pass = false;
        console.log('one');
      }
      if (endtime > userstart && endtime < userend) {
        pass = false;
        console.log('two');
      }
      if (starttime == userstart && endtime == userend) {
        pass = false;
        console.log('two');
      }
    }
    if (starttime > 86400 || endtime > 86400) {
      pass = false;
      console.log('three');
    }
    if (starttime < 0 || endtime < 0) {
      pass = false;
      console.log('four');
    }
    return pass;
  }

  async changeCalendarState() {
    if (this.state.showSchedule == false) {
      this.setState({ showSchedule: true });
      await this.getEvent();
    } else {
      this.setState({ showSchedule: false });
    }
  }


  secondstoheight(height, seconds) {
    let percent = seconds / 86400;
    return height * percent;
  }

  render() {
    const timescale = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ];
    const scale = 400 / 24;
    if (this.state.showSchedule == true) {
      return (
        <View style={styles.container}>
          {this.state.users.map(place => (
            <View style={{ position: 'absolute' }}>
              <View
                style={{
                  height: this.secondstoheight(400, place.end - place.start),
                  backgroundColor: 'red',
                  width: 1000,
                  top:
                    20 +
                    this.secondstoheight(
                      400,
                      (place.end - place.start) / 2 + place.start
                    ),
                }}
              />
            </View>
          ))}
          <View style={{ position: 'absolute', top: 20 }} />
          {timescale.map(time => (
            <Text
              style={{ position: 'absolute', left: 5, top: 17 + time * 16.7 }}>
              {time}
            </Text>
          ))}

          <View style={{ top: 460, left: 0, position: 'absolute' }}>
            <Button title="Get Schedule" onPress={this.getEvent.bind(this)}>
<Text>Get Schedule</Text>
</Button>
          </View>
          <View style={{ top: 490, left: 0, position: 'absolute' }}>
            <Button
              title="Switch Screen"
              onPress={this.changeCalendarState.bind(this)}
            >
<Text>Switch Screen</Text>
</Button>

          </View>
          <View style={{ top: 510, position: 'absolute' }} />
          <View style={{ top: 420, left: 160, position: 'absolute' }}>
            <Text style={styles.paragraph}>
              Pick time(Hour:0-24 Minute:0-60):
            </Text>
            <View style={{ height: 35 }}>
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
            </View>
            <Text style={styles.paragraph}>
              Pick duration(Hour:0-24 Minute:0-60):
            </Text>
            <View style={{ height: 35 }}>
              <TimePicker
                style={styles.timePicker}
                hour={this.state.durationhour}
                //initial Hourse value
                minute={this.state.durationminute}
                //initial Minutes value
                onChange={(hours, minutes) =>
                  this.setState({
                    durationhour: hours,
                    durationminute: minutes,
                  })
                }
              />
            </View>
            <View>
<Form>
<Item regular>
              <Input
                style={{ height: 20 }}
                placeholder="Type Event here!"
                onChangeText={text => this.setState({ text })}
              />
</Item>
</Form>
              <Button
                style={styles.buttonView}
                title="Add Event"
                onPress={this.addEvent.bind(this)}>
                <Text>Add Event</Text>
              </Button>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <CalendarWix
            style={{ height: 300, width: 320 }}
            // Initially visible month. Default = Date()
            current={'2019-01-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2010-01-01'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2025-01-01'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              this.setState({ date: day.dateString });
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              this.setState({ date: day.dateString });
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon left. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
          />
          <View style={{ top: 410, left: 80, position: 'absolute' }}>
            <Text>Date Selected: {this.state.date}</Text>
          </View>
          <View style={{ top: 490, left: 120, position: 'absolute' }}>
            <Button
              title="Switch Screen"
              onPress={this.changeCalendarState.bind(this)}
            >
<Text>Switch Screen</Text>
</Button>

          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  buttonView: {
    backgroundColor: '#FA5845',
  },
  timePicker: {
    width: '50%',
  },
});