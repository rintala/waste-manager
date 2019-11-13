import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Platform
} from "react-native";

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryTheme
} from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

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
            {"General information"}
          </Text>
        </View>

        <View style={styles.aboutContainer}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              color: "#6E6E6E"
            }}
          >
            Waste Details
          </Text>

          <VictoryChart style={styles.barChart} width={350} height={300}>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </View>

        <View style={styles.aboutContainer}>
          <VictoryPie
            colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
            data={[
              { x: "Restavfall", y: 1234 },
              { x: "Tidningar", y: 3048 },
              { x: "Plast", y: 2600 }
            ]}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

GeneralInfoScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  aboutContainer: {
    backgroundColor: "#fff",

    paddingTop: 20,
    paddingBottom: 20,
    padding: 20,
    marginTop: 40,
    opacity: 0.9
  },
  barchart: {
    alignItems: "center"
  }
});
