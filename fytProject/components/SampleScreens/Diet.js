import React from "react";
import { Container, Text, View } from "native-base";
import {
  Alert,
  Button,
  Linking,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
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
    padding: 10,
    paddingTop: -20,
    flex: 1,
    flexWrap: "wrap",
    width: Dimensions.get("window").width,
    color: "#FFFFFF",
    fontSize: 15,
    justifyContent: "flex-end"
  }
});

export default class Diet extends React.Component {
  breakfastCall() {
    Alert.alert("Breakfast isn't ready yet!");
  }

  lunchCall() {
    Alert.alert("Lunch isn't ready yet!");
  }

  dinnerCall() {
    Alert.alert("Dinner isn't ready yet!");
  }
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
    let pic6 = {
      uri: "https://www.wegmans.com/content/dam/wegmans/recipes/2/22574.jpg"

      //Seasoned Turkey Breast with Roasted Butternut Squash and Green Beans
    };
    let pic7 = {
      uri: "https://www.wegmans.com/content/dam/wegmans/recipes/2/22571.jpg"

      //Salmon Teriyaki with Broccoli and Cauliflower Rice
    };
    let pic8 = {
      uri: "https://www.wegmans.com/content/dam/wegmans/recipes/2/22534.jpg"

      //Shrimp Scampi with Zucchini Noodles and Caesar Salad
    };
    let pic9 = {
      uri: "https://www.wegmans.com/content/dam/wegmans/recipes/2/22089.jpg"

      //Horseradish Crusted Salmon with Cauliflower Rice and Asparagus
    };
    let pic10 = {
      uri: "https://www.wegmans.com/content/dam/wegmans/recipes/2/22085.jpg"

      //Peruvian Chicken with Green Sauce, Chickpea Salad and Asparagus
    };
    let pic11 = {
      uri: "https://www.wegmans.com/content/dam/wegmans/recipes/2/22217.jpg"

      //Strip Steak with Whipped Potatoes and Roasted Mushrooms
    };
    const navigate = this.props.navigation;
    return (
      <Container
        style={{ top: Constants.statusBarHeight, backgroundColor: "#303030" }}
      >
        <Head title="Diet" navigation={navigate} />
        <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
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
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <Image
              source={pic3}
              style={{
                justifyContent: "flex-start",
                width: 170,
                height: 180
              }}
            />
            <Text style={styles.smallWhiteRightAlign}>
              Breakfast: Oatmeal with berries and peanut butter, Protein Powder
              Ingredients: 8 oz dried oats, 4 oz Berries, 1 teaspoon of Peanut
              Butter, 1 scoop of Protein Powder Macros: 40g of Carbs, 3g of
              Fats, 21g of Protein, Total Calories: 271
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 10,
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Image source={pic4} style={{ width: 170, height: 180 }} />
            <Text style={styles.smallWhiteRightAlign}>
              Lunch: Chicken Breast with sweet potato and vegetables
              Ingredients: 16 oz Chicken Breast, 1 sweet potato, 1 cup of mixed
              vegetables Macros: 70g of Carbs, 5g of Fats, 90g of Protein, Total
              Calories: 685
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 10,
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Image source={pic5} style={{ width: 170, height: 180 }} />
            <Text style={styles.smallWhiteRightAlign}>
              Dinner: Salmon with rice and vegetables Ingredients: 10 oz salmon,
              250g of cooked rice, 1 cup of mixed vegetables Macros: 40g of
              Carbs, 20g of Fats, 40g of Protein. Total Calories: 500
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                flex: 1,
                flexWrap: "wrap",
                justifyContent: "center",
                padding: 25,
                paddingVertical: -20,
                fontSize: 25,
                color: "#FFFFFF",
                fontStyle: "italic",
                fontWeight: "bold"
              }}
            >
              Order it now from Wegmans by pressing the image below and you can
              have this meal tomorrow!
            </Text>
          </View>
          <View style={{ padding: 10, flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                paddingBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL("https://www.wegmans.com")}
              >
                <Image source={pic3} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.lunchCall()}>
                <Image source={pic4} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.dinnerCall()}>
                <Image source={pic5} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                paddingBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL("https://www.wegmans.com")}
              >
                <Image source={pic6} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.lunchCall()}>
                <Image source={pic7} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.dinnerCall()}>
                <Image source={pic8} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                paddingBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL("https://www.wegmans.com")}
              >
                <Image source={pic9} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.lunchCall()}>
                <Image source={pic10} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.dinnerCall()}>
                <Image source={pic11} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
