import React from "react";
import { Container, Text, View } from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import {
  Alert,
  Button,
  Linking,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Constants } from "expo";
import Head from "../Navigation/Head";
import { backgroundColor } from "../../config/styles";
import * as firebase from "firebase";

const styles = StyleSheet.create({
  bigWhite: {
    color: "#FFFFFF",
    fontSize: 25,
    fontStyle: "italic"
  },
  smallWhite: {
    textAlign: "center",
    fontSize: 15,
    color: "#FFFFFF"
  },
  smallWhiteRightAlign: {
    padding: 10,
    paddingTop: -20,
    flex: 1,
    flexWrap: "wrap",
    color: "#FFFFFF",
    width: Dimensions.get("window").width,
    fontSize: 15,
    justifyContent: "flex-end"
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyDfncJDNmhPUK_oSBYPbwRgNXk8uLKzVp4",
  authDomain: "fytapp-aef50.firebaseapp.com",
  databaseURL: "https://fytapp-aef50.firebaseio.com/",
  storageBucket: "gs://fytapp-aef50.appspot.com/",
  messagingSenderId: "fytapp-aef50"
};

export default class Diet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foodItem: "",
      foodList: [],
      index: 0,
      routes: [
        { key: "first", title: "Cutting" },
        { key: "second", title: "Maintain" },
        { key: "third", title: "Bulking" },
        { key: "fourth", title: "UBData" }
      ]
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("Pistachios/Breadbox")
      .once("value", snapshot => {
        const higherParent = snapshot.ref.parent.parent.key;
        const parent = snapshot.ref.parent.key;
        const key = snapshot.key;
        const value = snapshot.val();
        var carbs = "Total Carbohydrates";
        var fats = "Total Fat";
        if (value) {
          const foodArray = [];
          if (higherParent != null) {
            foodArray.push(higherParent);
          }
          foodArray.push(parent + " : " + key);
          Object.keys(value).forEach(foodItem =>
            foodArray.push(
              foodItem +
                ":" +
                " Calories: " +
                value[foodItem].Calories +
                ", Total Fat: " +
                value[foodItem].TotalFat +
                ", Total Carbs: " +
                value[foodItem].TotalCarbohydrates +
                ", Protein: " +
                value[foodItem].Protein
            )
          );
          this.setState({
            foodList: foodArray
          });
        }
      });
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
    const UBData = () => (
      <Container style={{ backgroundColor: "#303030" }}>
        <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
          <View>
            <FlatList
              data={this.state.foodList}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column"
                  }}
                >
                  <Text style={styles.smallWhite}>{item}</Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </Container>
    );

    return (
      <Container
        style={{ top: Constants.statusBarHeight, backgroundColor: "#303030" }}
      >
        <Head title="Diet" navigation={navigate} />
        <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: CuttingTab,
              second: MaintenanceTab,
              third: BulkingTab,
              fourth: UBData
            })}
            onIndexChange={index => this.setState({ index: index })}
            initialLayout={{ width: Dimensions.get("window").width }}
          />
        </ScrollView>
      </Container>
    );
  }
}

const CuttingTab = () => (
  <Container style={{ backgroundColor: "#303030" }}>
    <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 10
        }}
      >
        <Image
          source={{
            uri:
              "https://www.veggieinspired.com/wp-content/uploads/2015/05/Customizable-Sweet-Creamy-Oatmeal-2.1-814x1024.jpg"
          }}
          style={{
            justifyContent: "flex-start",
            width: 170,
            height: 180
          }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Breakfast: Oatmeal with berries and peanut butter, Protein Powder.
          Ingredients: 8 oz dried oats, 4 oz Berries, 1 teaspoon of Peanut
          Butter, 1 scoop of Protein Powder. Macros: 40g of Carbs, 3g of Fats,
          21g of Protein. Total Calories: 371
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <Image
          source={{
            uri:
              "https://i0.wp.com/notyournormalhealthblog.com/wp-content/uploads/2012/09/p8280370-1.jpg?fit=1170%2C878&ssl=1"
          }}
          style={{ width: 170, height: 180 }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Lunch: Chicken Breast with sweet potato and vegetables. Ingredients:
          16 oz Chicken Breast, 1 sweet potato, 1 cup of mixed vegetables.
          Macros: 70g of Carbs, 5g of Fats, 90g of Protein. Total Calories: 685
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <Image
          source={{
            uri: "http://images.media-allrecipes.com/images/65782.jpg"
          }}
          style={{ width: 170, height: 180 }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Dinner: Salmon with rice and vegetables. Ingredients: 10 oz salmon,
          250g of cooked rice, 1 cup of mixed vegetables. Macros: 40g of Carbs,
          20g of Fats, 40g of Protein. Total Calories: 500
        </Text>
      </View>
    </ScrollView>
  </Container>
);

const MaintenanceTab = () => (
  <Container style={{ backgroundColor: "#303030" }}>
    <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 10
        }}
      >
        <Image
          source={{
            uri:
              "https://images.media-allrecipes.com/userphotos/250x250/4543821.jpg"
          }}
          style={{
            justifyContent: "flex-start",
            width: 170,
            height: 180
          }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Breakfast: Four Egg Omelette with 2 Strips of Bacon Ingredients: 4
          eggs, 2 strips of bacon. Macros: 4g of Carbs, 28g of Fats, 27g of
          Protein. Total Calories: 500
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <Image
          source={{
            uri: "https://annejisca.files.wordpress.com/2011/06/img_4843.jpg"
          }}
          style={{ width: 170, height: 180 }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Lunch: Ground Beef with Rice and Beans. Ingredients: 10 oz ground
          beef, Half cup of Rice, Half cup of Beans. Macros: 120g of Carbs, 40g
          of Fats, 60g of Protein, Total Calories: 880
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <Image
          source={{
            uri:
              "http://threemanycooks.com/wp-content/uploads/2011/10/Quick-Roast-Fish-Asparagus-and-Potatoes-with-Lemon-Caper-Drizzle1-e1319208710726.jpg"
          }}
          style={{ width: 170, height: 180 }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Dinner: Cod with a baked potato and Asparagus. Ingredients: 8 oz cod,
          1 potato, 8 Asparagus Spears. Macros: 40g of Carbs, 20g of Fats, 40g
          of Protein. Total Calories: 500
        </Text>
      </View>
    </ScrollView>
  </Container>
);

const BulkingTab = () => (
  <Container style={{ backgroundColor: "#303030" }}>
    <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 10
        }}
      >
        <Image
          source={{
            uri:
              "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/9/4/YW0909H_avocado-toast-with-egg-scramble_s4x3.jpg.rend.hgtvcom.826.620.suffix/1484024438211.jpeg"
          }}
          style={{
            justifyContent: "flex-start",
            width: 170,
            height: 180
          }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Breakfast: Avocado Toast with Eggs Ingredients: 1 avocado, 2 slices of
          toasted bread, 4 eggs. Macros: 30g of Carbs, 50g of Fats, 30g of
          Protein. Total Calories: 690
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <Image
          source={{
            uri:
              "http://www.realfoodgirlunmodified.com/wp-content/uploads/2014/05/WM-featured-image-poss.jpg.jpg"
          }}
          style={{ width: 170, height: 180 }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Lunch: Chicken Broccoli Alfredo. Ingredients: 8 oz chicken breast, cup
          of broccoli, half cup of pasta, and alfredo sauce. Macros: 106g of
          Carbs, 49g of Fats, 42g of Protein, Total Calories: 1040
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <Image
          source={{
            uri:
              "https://s3-media1.fl.yelpcdn.com/bphoto/ocL6UyuJlJtJDrBVCsQnng/o.jpg"
          }}
          style={{ width: 170, height: 180 }}
        />
        <Text style={styles.smallWhiteRightAlign}>
          Dinner: Steak, Asparagus, Mashed Potatoes and Gravy. Macros: 50g of
          Carbs, 50g of Fats, 60g of Protein. Total Calories: 890
        </Text>
      </View>
    </ScrollView>
  </Container>
);
