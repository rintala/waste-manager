import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground
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
        <View style={styles.aboutContainer}>
          <Text style={{ fontSize: 30, paddingTop: 20, paddingBottom: 20 }}>
            Waste Details
          </Text>

          <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
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
  title: "General Info"
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
    opacity: 0.7
  }
});
