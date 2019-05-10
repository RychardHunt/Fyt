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
  FlatList,
  SectionList,
  RefreshControl
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
  },
  sectionHeader: {
    backgroundColor: "#00bfff",
    fontSize: 20,
    padding: 5,
    color: "#303030",
    fontWeight: "bold"
  },
  sectionItems: {
    fontSize: 15,
    padding: 5,
    color: "#FFFFFF",
    backgroundColor: "#303030"
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
      refreshing: false,
      foodItem: "",
      foodList: [],
      foodList2: [],
      foodList3: [],
      foodList4: [],
      index: 0,
      routes: [
        { key: "first", title: "Cutting" },
        { key: "second", title: "Maintain" },
        { key: "third", title: "Bulking" },
        { key: "fourth", title: "UBData" }
      ]
    };
  }

  fetchData = async () => {
    firebase
      .database()
      .ref()
      .child("Pistachios/Bravo Pasta")
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
            foodList2: foodArray
          });
        }
      });

    firebase
      .database()
      .ref()
      .child("Ellicott Food Court/Sizzles")
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
            foodList3: foodArray
          });
        }
      });

    firebase
      .database()
      .ref()
      .child("Ellicott Food Court/Sizzles Breakfast")
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
            foodList4: foodArray
          });
        }
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  sectionListAlert = item => {
    Alert.alert(item);
  };

  render() {
    const navigate = this.props.navigation;
    const UBData = () => (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#303030"
        }}
      >
        <SectionList
          sections={[
            { title: "Pistachios : Bravo Pasta", data: this.state.foodList },
            { title: "Pistachios : Breadbox", data: this.state.foodList2 },
            {
              title: "Ellicott Food Court: Sizzles",
              data: this.state.foodList3
            },
            {
              title: "Ellicott Food Court : Sizzles Breakfast",
              data: this.state.foodList4
            }
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}> {section.title} </Text>
          )}
          renderItem={({ item }) => (
            <Text
              style={styles.sectionItems}
              onPress={this.sectionListAlert.bind(this, item)}
            >
              {" "}
              {item}{" "}
            </Text>
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />

        <View style={{ flex: 1, padding: 10 }} />
      </View>
    );

    return (
      <Container
        style={{ top: Constants.statusBarHeight, backgroundColor: "#303030" }}
      >
        <Head title="Diet" navigation={navigate} />

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
      </Container>
    );
  }
}

const CuttingTab = () => (
  <Container style={{ backgroundColor: "#303030" }}>
    <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
      <Text style={styles.smallWhite}>
        Cutting is another way of saying to lose fat while maintaining as much
        muscle mass as possible. In order to lose fat, we must be in a caloric
        deficit. In order to lose an average of one pound a week, we must be in
        a caloric deficit of 500 calories a day from our total daily energy
        expenditure (TDEE). For an average person who requires around 2000
        calories a day, we will take 500 calories away from that and that's why
        this sample meal plan below will total 1500 calories.
      </Text>
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
      <View style={{ flex: 1, padding: 10 }} />
    </ScrollView>
  </Container>
);

const MaintenanceTab = () => (
  <Container style={{ backgroundColor: "#303030" }}>
    <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
      <Text style={styles.smallWhite}>
        Maintaining is exactly as it sounds like which is maintaining our body's
        current physique. In order to maintain our body's current physique, our
        caloric intake must be as much as much as our total daily energy
        expenditure (TDEE). For an average person who requires around 2000
        calories a day, our sample maintenance meal plan will be 2000 calories.
      </Text>
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
          Breakfast: Four Egg Omelette with 2 Strips of Bacon. Ingredients: 4
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
          of Fats, 60g of Protein. Total Calories: 880
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
      <View style={{ flex: 1, padding: 10 }} />
    </ScrollView>
  </Container>
);

const BulkingTab = () => (
  <Container style={{ backgroundColor: "#303030" }}>
    <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
      <Text style={styles.smallWhite}>
        Bulking is a way of getting bigger by increasing caloric intake in order
        to build muscle. In order to do a lean bulk where we are in a caloric
        surplus to gain muscle but try to minize fat gain, we will be in a 500
        caloric surplus from our total daily energy expenditure. For an average
        person who requires around 2000 calories a day, we will add 500 calories
        to that and that's why this sample meal plan below will total around
        2500 calories.
      </Text>
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
          Breakfast: Avocado Toast with Eggs. Ingredients: 1 avocado, 2 slices
          of toasted bread, 4 eggs. Macros: 30g of Carbs, 50g of Fats, 30g of
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
          Carbs, 49g of Fats, 42g of Protein. Total Calories: 1040
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
          Dinner: Steak, Asparagus, Mashed Potatoes and Gravy. Ingredients: 8 oz
          Sirloin Steak, 8 asparagus spears, 6 oz mashed potatoes, 2 oz gravy.
          Macros: 50g of Carbs, 50g of Fats, 60g of Protein. Total Calories: 890
        </Text>
      </View>
      <View style={{ flex: 1, padding: 10 }} />
    </ScrollView>
  </Container>
);
