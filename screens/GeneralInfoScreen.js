import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground
} from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function GeneralInfoScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/background-green.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <View>
          <Text>General info with text and diagrams</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

GeneralInfoScreen.navigationOptions = {
  title: "General Info"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  aboutContainer: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20
  }
});
