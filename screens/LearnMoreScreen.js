import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  Platform
} from "react-native";
import { ExpoLinksView } from "@expo/samples";

import { Video } from "expo-av";

export default function LearnMoreScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/background-green.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView style={styles.container}>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              paddingTop: 30,
              paddingLeft: 20,
              textDecorationLine: "underline"
            }}
          >
            {"Learn more"}
          </Text>
        </View>

        <View style={styles.aboutContainer}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
              // color: "#6E6E6E"
            }}
          >
            Food waste
          </Text>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 14,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
              // color: "#6E6E6E"
            }}
          >
            Divide into smaller pieces. Food scraps, for example:
          </Text>
          <FlatList
            data={[
              { key: "• Bread, eggshell, pasta, rice" },
              { key: "• Vegetables, fruits" },
              { key: "• Meat, fish, seafood" }
            ]}
            renderItem={({ item }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily:
                    Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
                  // color: "#6E6E6E"
                }}
              >
                {item.key}
              </Text>
            )}
          />
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
              // color: "#6E6E6E"
            }}
          >
            For more information, read instructions from yours waste mill
            manufacturer.
          </Text>
          <Image
            style={{ marginTop: 10, width: "100%", height: 180 }}
            source={{
              uri:
                "https://intra.kth.se/polopoly_fs/1.915703.1562578909!/image/Matavfall_1000-667px.jpg"
            }}
          />
        </View>

        <View style={styles.aboutContainer2}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              color: "white"
            }}
          >
            Paper
          </Text>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 14,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              color: "white"
            }}
          >
            Loosely placed in the throw
          </Text>

          <FlatList
            data={[
              { key: "• Brochures" },
              { key: "• Newspapers" },
              { key: "• Directories" },
              { key: "• Writing & writing paper" },
              { key: "• Weekly / monthly magazines" }
            ]}
            renderItem={({ item }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily:
                    Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
                  color: "white"
                }}
              >
                {item.key}
              </Text>
            )}
          />
          <Image
            style={{ marginTop: 10, width: "100%", height: 180 }}
            source={{
              uri:
                "https://content3.jdmagicbox.com/comp/lucknow/p1/0522px522.x522.130417143027.r8p1/catalogue/green-earth-recycling-chinhat-lucknow-waste-paper-dealers-4eqhmcc.jpg"
            }}
          />
        </View>

        <View style={styles.aboutContainer}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
              // color: "#6E6E6E"
            }}
          >
            Plastic packaging
          </Text>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 14,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
              // color: "#6E6E6E"
            }}
          >
            Pack in bag, max 25 liters
          </Text>
          <FlatList
            data={[
              { key: "• Detergent and rinse bottles" },
              { key: "• Plastic cans ≤ 2.5 liters" },
              { key: "• Plastic caps" },
              { key: "• Plastic bags, plastic wrap" },
              { key: "• Plastic Tubes" },
              { key: "• Yogurt Cans" }
            ]}
            renderItem={({ item }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily:
                    Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
                  // color: "#6E6E6E"
                }}
              >
                {item.key}
              </Text>
            )}
          />
          <Image
            style={{ marginTop: 10, width: "100%", height: 180 }}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Plastic_household_items.jpg"
            }}
          />
        </View>

        <View style={styles.aboutContainer2}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              color: "white"
            }}
          >
            Household waste
          </Text>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 14,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              color: "white"
            }}
          >
            Pack in bag, max 25 liters
          </Text>
          <FlatList
            data={[
              { key: "• Ash, candles, snuff, cigarettes" },
              { key: "• Diapers, napkins" },
              { key: "• Dust bags" },
              { key: "• Soil, flowers, herb/salad pot" },
              { key: "• Cat litter, pet litter" },
              { key: "• Napkins with print / color" },
              { key: "• Large meat bones" }
            ]}
            renderItem={({ item }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily:
                    Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
                  color: "white"
                }}
              >
                {item.key}
              </Text>
            )}
          />
          <Image
            style={{ marginTop: 10, width: "100%", height: 180 }}
            source={{
              uri: "https://images.wisegeek.com/garbage-on-street.jpg"
            }}
          />
        </View>
        <View style={styles.aboutContainer}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              color: "black"
            }}
          >
            Inspiration - the future of sorting
          </Text>
          <Video
            source={{
              uri:
                "http://s3.amazonaws.com/digitaltrends-uploads-prod/wp-content/uploads/2018/07/oscar.mp4?_=4"
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            useNativeControls
            style={{ width: "100%", height: 200 }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

LearnMoreScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    /* backgroundColor: "#fff" */
  },
  aboutContainer: {
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.9,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20,
    marginTop: 20,
    borderRadius: 10
  },
  aboutContainer2: {
    backgroundColor: "#B8D2B9",
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.9,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20,
    marginTop: 20,
    borderRadius: 10
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
