import * as React from 'react';
import { StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Card, Text, View, Form, Item, Input } from 'native-base';
import { Constants, Calendar, Permissions } from 'expo';
import DatePicker from 'react-native-datepicker';
import {
  Calendar as CalendarWix,
  CalendarList,
  Agenda
} from 'react-native-calendars';
import TimePicker from 'react-native-simple-time-picker';

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ key: 1, start: 0, end: 0, name: 'placeholder' }],
      monthusers: [{ key: 1, start: 0, end: 0, name: 'placeholder' }],
      date: '2019-01-01',
      hour: 0,
      minute: 0,
      durationhour: 0,
      durationminute: 0,
      eventstart: 500,
      eventend: 500,
      text: '',
      showSchedule: false,
      items: {}
    };
  }

  getScheduleObjects(calendarday) {
    console.log('function start');
    var container = [];
    for (var i = 0; calendarday.length; i++) {
      var datestart = calendarday[i].startDate;
      var dateend = calendarday[i].endDate;
      var datename = calendarday[i].title;
      datestart = new Date(datestart);
      dateend = new Date(dateend);
      datestart = new Date(datestart);
      var dateendseconds = (dateend.getTime() / 1000 - 18000) % 86400;
      console.log('dateend = ' + dateendseconds);
      var datestartseconds = (datestart.getTime() / 1000 - 18000) % 86400;
      console.log('datestart = ' + datestartseconds);
      var dateobject = {
        key: i + 1,
        start: datestartseconds,
        end: dateendseconds,
        name: datename
      };
      console.log(dateobject);
      container.push(dateobject);
      console.log(calendarday.length);

      if (i == calendarday.length - 1) {
        console.log(container);
        this.setState({ users: container });
      }
    }
    console.log(calendarday.length);
  }

  getSpecialScheduleObjects(calendarday) {
    var container = [];
    var finalarray = {};

    for (var i = 0; calendarday.length; i++) {
      var datestart = calendarday[i].startDate;
      var dateend = calendarday[i].endDate;
      var datename = calendarday[i].title;
      const dateString = this.formatDate(datestart);
      datestart = new Date(datestart);
      dateend = new Date(dateend);
      datestart = new Date(datestart);
      var dateendseconds = (dateend.getTime() / 1000 - 18000) % 86400;
      var datestartseconds = (datestart.getTime() / 1000 - 18000) % 86400;
      const dailystartobject = new Date(dateendseconds);
      const dailyendobject = new Date(dateendseconds);
      finalarray[dateString] =
        typeof finalarray[dateString] != 'undefined' &&
        finalarray[dateString] instanceof Array
          ? finalarray[dateString]
          : [];
      if (this.state.date == dateString) {
        var dateobject = {
          key: i + 1,
          start: datestartseconds,
          end: dateendseconds,
          name: datename
        };
        console.log(this.hourMinuteString(datestart));
        container.push(dateobject);
      }
      finalarray[dateString].push({
        key: i + 1,
        starthour: JSON.stringify(datestart.getHours()),
        startminute: JSON.stringify(datestart.getMinutes()),
        start: this.hourMinuteString(datestart),
        endhour: JSON.stringify(dateend.getHours()),
        endminute: JSON.stringify(dateend.getMinutes()),
        end: this.hourMinuteString(dateend),
        height: 50,
        name: datename
      });
      if (i == calendarday.length - 1) {
        this.setState({ items: finalarray, users: container });
      }
    }
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  hourMinuteString(d) {
    function z(n) {
      return (n < 10 ? '0' : '') + n;
    }
    var h = d.getHours();
    return (
      (h % 12 || 12) + ':' + z(d.getMinutes()) + ' ' + (h < 12 ? 'AM' : 'PM')
    );
  }

  async addEvent() {
    console.log('pressed');
    if (this.insertCalendarEvent()) {
      console.log('success');
      var permission = await Permissions.askAsync('calendar');
      console.log(permission);
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
      console.log(finaldate);
      console.log(endingdate);
      var cal = await Calendar.getCalendarsAsync();
      console.log(this.state.date);
      var eventi = await Calendar.createEventAsync(Calendar.DEFAULT, {
        startDate: finaldate,
        endDate: endingdate,
        title: this.state.text,
        timeZone: 'GMT-5'
      })
        .then(event => {
          console.log('success', event);
        })
        .catch(error => {
          console.log('failure', error);
        });
    } else {
      console.log('failure');
    }
    console.log('after createEventAsync'); //it never gets here on snack, throws date error in app
  }

  async getSpecialEvent() {
    var permission = await Permissions.askAsync('calendar');
    var contain = await Calendar.getCalendarsAsync();
    var begindate = new Date(this.state.date);
    begindate = new Date(begindate.setTime(begindate.getTime() + 1 * 86400000));
    begindate.setDate(1);
    begindate.setHours(0);
    begindate.setMinutes(0);
    var enddate = new Date(this.state.date);
    enddate = new Date(enddate.setTime(begindate.getTime() + 31 * 86400000));
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
    const finalholder = this.getSpecialScheduleObjects(calendarholder);
  }

  insertCalendarEvent() {
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
    console.log('startfinal + ' + starttime);
    console.log('endfinal + ' + endtime);
    console.log(pass);
    return pass;
  }

  secondstoheight(height, seconds) {
    let percent = seconds / 86400;
    return height * percent;
  }

  renderItem(item) {
    return (
      <View style={styles.cardView}>
        <Text>
          name=({item.name}) start=({item.start}) end=({item.end})
        </Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.cardView}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
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
      23
    ];
    const scale = 400 / 24;
    return (
      <View style={styles.container}>
        <View style={{ height: 600, width: 500 }}>
          <Agenda
            items={this.state.items}
            loadItemsForMonth={this.getSpecialEvent.bind(this)}
            selected={this.state.date}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            renderEmptyData={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            onDayPress={day => {
              this.setState({ date: day.dateString });
            }}
          />
        </View>

        <View style={{ position: 'absolute', top: 20 }} />

        <View />
        <View>
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
                  durationminute: minutes
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
              onPress={this.addEvent.bind(this)}
            >
              <Text>Add Event</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  buttonView: {
    backgroundColor: '#FA5845'
  },
  timePicker: {
    width: '50%'
  },
  cardView: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#d6d7da'
  }
});
