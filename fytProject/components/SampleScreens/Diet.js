import React from "react";
import { Container, Text, View } from "native-base";
import { StyleSheet, StatusBar, Image, ScrollView } from "react-native";
import { Constants } from "expo";
import Head from "../Navigation/Head";

const styles = StyleSheet.create({
  bigWhite: {
    color: "#FFFFFF",
    fontSize: 25,
    fontStyle: "italic"
  },
  smallWhite: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 15
  },
  smallWhiteRightAlign: {
    paddingLeft: 190,

    color: "#FFFFFF",
    fontSize: 15
  }
});

export default class Diet extends React.Component {
  render() {
    let pic = {
      uri:
        "https://ultimateperformance.com/media/Charles-12-week-transformation-results-front.jpg"
    };
    let pic2 = {
      uri:
        "https://upfitness.co.uk/media/Kelly-18-week-front-body-transformation-results.jpg"
    };
    let pic3 = {
      uri:
        "https://www.veggieinspired.com/wp-content/uploads/2015/05/Customizable-Sweet-Creamy-Oatmeal-2.1-814x1024.jpg"
    };
    let pic4 = {
      uri:
        "https://i0.wp.com/notyournormalhealthblog.com/wp-content/uploads/2012/09/p8280370-1.jpg?fit=1170%2C878&ssl=1"
    };
    let pic5 = {
      uri: "http://images.media-allrecipes.com/images/65782.jpg"
    };
    const navigate = this.props.navigation;
    return (
      <Container
        style={{ top: Constants.statusBarHeight, backgroundColor: "#303030" }}
      >
        <Head title="Diet" navigation={navigate} />
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.bigWhite}> Transformations </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image source={pic} style={{ width: 193, height: 110 }} />
            <Image source={pic2} style={{ width: 193, height: 110 }} />
          </View>

          <View>
            <Text style={styles.smallWhite}>
              Here is a diet plan to transform your body to look like the ones
              above.
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              marginTop: 20,
              marginHorizontal: 10
            }}
          >
            <Text style={styles.smallWhiteRightAlign}>
              Breakfast: Oatmeal with berries and peanut butter (Add protein
              powder for additional protein intake)
              <Image source={pic3} style={{ width: 170, height: 180 }} />
            </Text>

            <Text style={styles.smallWhiteRightAlign}>
              Lunch: Chicken Breast with sweet potato and vegetables
            </Text>
            <Image source={pic4} style={{ width: 170, height: 180 }} />
            <Text style={styles.smallWhiteRightAlign}>
              Dinner: Salmon with rice and vegetables
              {/* Include calories, macros, and portion size after */}
            </Text>
            <Image source={pic5} style={{ width: 170, height: 180 }} />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
