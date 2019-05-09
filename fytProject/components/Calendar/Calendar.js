import * as React from "react";
import { StyleSheet, TextInput, Alert } from "react-native";
import { Button, Card, Text, View, Form, Item, Input } from "native-base";
import { Constants, Calendar, Permissions } from "expo";
import DatePicker from "react-native-datepicker";
import {
  Calendar as CalendarWix,
  CalendarList,
  Agenda
} from "react-native-calendars";
import TimePicker from "react-native-simple-time-picker";
import { DEVICE_WIDTH } from "../../config/settings";
import { DEVICE_HEIGHT } from "../../config/settings";

export default class CalendarPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ key: 1, start: 0, end: 0, name: "placeholder" }],
      monthusers: [{ key: 1, start: 0, end: 0, name: "placeholder" }],
      date: "2019-01-01",
      hour: 0,
      minute: 0,
      durationhour: 0,
      durationminute: 0,
      eventstart: 500,
      eventend: 500,
      text: "",
      note: "",
      showSchedule: false,
      items: {}
    };
  }

  getScheduleObjects(calendarday) {
    console.log("function start");
    var container = [];
    for (var i = 0; calendarday.length; i++) {
      var datestart = calendarday[i].startDate;
      var dateend = calendarday[i].endDate;
      var datename = calendarday[i].title;
      datestart = new Date(datestart);
      dateend = new Date(dateend);
      datestart = new Date(datestart);
      var dateendseconds = (dateend.getTime() / 1000 - 18000) % 86400;
      console.log("dateend = " + dateendseconds);
      var datestartseconds = (datestart.getTime() / 1000 - 18000) % 86400;
      console.log("datestart = " + datestartseconds);
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
      var datenote = calendarday[i].notes;
      const dateString = this.formatDate(datestart);
      datestart = new Date(datestart);
      dateend = new Date(dateend);
      datestart = new Date(datestart);
      var dateendseconds = (dateend.getTime() / 1000 - 18000) % 86400;
      var datestartseconds = (datestart.getTime() / 1000 - 18000) % 86400;
      const dailystartobject = new Date(dateendseconds);
      const dailyendobject = new Date(dateendseconds);
      finalarray[dateString] =
        typeof finalarray[dateString] != "undefined" &&
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
      if (datename.length == 0) {
        datename = "My Event";
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
        name: datename,
        note: datenote
      });
      if (i == calendarday.length - 1) {
        this.setState({ items: finalarray, users: container });
      }
    }
  }

  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  hourMinuteString(d) {
    function z(n) {
      return (n < 10 ? "0" : "") + n;
    }
    var h = d.getHours();
    return (
      (h % 12 || 12) + ":" + z(d.getMinutes()) + " " + (h < 12 ? "AM" : "PM")
    );
  }

  async getSpecialEvent() {
    var permission = await Permissions.askAsync("calendar");
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

  renderItem(item) {
    return (
      <Card style={styles.cardView}>
        <View style={styles.specialBlueBox} />
        <View style={{ marginLeft: 15 }}>
          <Text>{item.name}</Text>

          <Text style={{ fontSize: 10, color: "grey" }}>
            {item.start} - {item.end}
          </Text>
          <Text>{item.note} </Text>
        </View>
      </Card>
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
    console.log(DEVICE_WIDTH);
    console.log(DEVICE_HEIGHT);
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
        <View style={{ height: DEVICE_HEIGHT, width: DEVICE_WIDTH }}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center"
  },
  paragraph: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  buttonView: {
    backgroundColor: "#FA5845"
  },
  timePicker: {
    width: "50%"
  },
  cardView: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "#d6d7da"
  },
  specialBlueBox: {
    width: 5,
    top: 5,
    left: 5,
    backgroundColor: "lightblue",
    height: 5,
    position: "absolute"
  }
});
