import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function LearnMoreScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <View>
        <Text>General info with text and diagrams</Text>
      </View>
    </ScrollView>
  );
}

LearnMoreScreen.navigationOptions = {
  title: "Learn more"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
