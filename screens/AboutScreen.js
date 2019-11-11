import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground
} from "react-native";
import { ExpoLinksView } from "@expo/samples";
import backgroundImage from "../assets/images/background-green.png";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <View>
        <ImageBackground
          source={{ uri: "../assets/images/background-green.png" }}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.aboutContainer}>
            <Text>General info with text and diagrams</Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

AboutScreen.navigationOptions = {
  title: "About us"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  aboutContainer: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20
  }
});
