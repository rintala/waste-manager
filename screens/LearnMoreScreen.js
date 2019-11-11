import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image
} from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function LearnMoreScreen() {
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
        <View style={styles.aboutContainer}>
          <Text style={{ fontSize: 30, paddingTop: 20, paddingBottom: 20 }}>
            Food waste
          </Text>
          <Text style={{ fontSize: 20 }}>
            Minim cupidatat incididunt sunt laboris aliqua. Laboris nostrud elit
            esse laboris consequat sunt minim occaecat adipisicing nulla officia
            deserunt nisi. Et pariatur pariatur culpa nisi proident anim id
            nostrud culpa sunt commodo. Sint eu magna elit commodo cupidatat non
            pariatur in ipsum proident. Culpa velit incididunt laborum occaecat
            incididunt mollit proident exercitation commodo quis tempor
            incididunt sunt ad. Adipisicing veniam laborum sunt qui consectetur
            veniam. Magna cillum eu minim ex amet in duis id et eiusmod
            cupidatat laborum.
          </Text>
          <Text style={{ fontSize: 30, paddingTop: 20, paddingBottom: 20 }}>
            Paper
          </Text>
          <Text style={{ fontSize: 20 }}>
            Minim cupidatat incididunt sunt laboris aliqua. Laboris nostrud elit
            esse laboris consequat sunt minim occaecat adipisicing nulla officia
            deserunt nisi. Et pariatur pariatur culpa nisi proident anim id
            nostrud culpa sunt commodo. Sint eu magna elit commodo cupidatat non
            pariatur in ipsum proident. Culpa velit incididunt laborum occaecat
            incididunt mollit proident exercitation commodo quis tempor
            incididunt sunt ad. Adipisicing veniam laborum sunt qui consectetur
            veniam. Magna cillum eu minim ex amet in duis id et eiusmod
            cupidatat laborum.
          </Text>
          <Text style={{ fontSize: 30, paddingTop: 20, paddingBottom: 20 }}>
            Plastic
          </Text>
          {/* <Image source={require("../assets/images/trash-bin.png")} /> */}
          <Text style={{ fontSize: 20 }}>
            Minim cupidatat incididunt sunt laboris aliqua. Laboris nostrud elit
            esse laboris consequat sunt minim occaecat adipisicing nulla officia
            deserunt nisi. Et pariatur pariatur culpa nisi proident anim id
            nostrud culpa sunt commodo. Sint eu magna elit commodo cupidatat non
            pariatur in ipsum proident. Culpa velit incididunt laborum occaecat
            incididunt mollit proident exercitation commodo quis tempor
            incididunt sunt ad. Adipisicing veniam laborum sunt qui consectetur
            veniam. Magna cillum eu minim ex amet in duis id et eiusmod
            cupidatat laborum.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

LearnMoreScreen.navigationOptions = {
  title: "Learn more"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
    /* backgroundColor: "#fff" */
  },
  aboutContainer: {
    backgroundColor: "#fff",
    opacity: 0.7,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20
  }
});
