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
  { quarter: 1, earnings: 13000, fill: "#009245" },
  { quarter: 2, earnings: 16500, fill: "#33CC66" },
  { quarter: 3, earnings: 14250, fill: "#66FF66" }
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
              paddingTop: 15,
              paddingLeft: 20,
              textDecorationLine: "underline"
            }}
          >
            General information
          </Text>
        </View>

        <View style={styles.throwThrashContainer}>
          <Text
            style={{
              color: "#6E6E6E",
              fontSize: 20,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              paddingBottom: 10,
              paddingLeft: 20,
              fontWeight: "bold"
            }}
          >
            Thrown trash in SRS - November
          </Text>

          <Text
            style={{
              fontSize: 14,
              paddingBottom: 5,
              paddingLeft: 20,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              color: "#6E6E6E"
            }}
          >
            Total number of trashbags thrown, includes plastic, paper and rest.
          </Text>

          {Platform.OS === "android" ? (
            <VictoryChart domainPadding={17} width={350} height={300}>
              <VictoryBar
                animate={{ duration: 400, onStart: { duration: 1000 } }}
                style={{
                  data: {
                    fill: "#B8D2B9",
                    stroke: "black",
                    strokeWidth: 1
                  }
                }}
                data={[
                  { month: "Jan", y: 9 },
                  { month: "Feb", y: 13 },
                  { month: "Mar", y: 9 },
                  { month: "Apr", y: 10 },
                  { month: "May", y: 10 }
                ]}
                x="month"
                y="y"
              />
            </VictoryChart>
          ) : (
            <VictoryChart domainPadding={17} width={350} height={300}>
              <VictoryLine
                style={{ data: { stroke: "#009245" } }}
                /*  animate={{ duration: 500, onStart: { duration: 1000 } }} */
                data={[
                  { x: "Jan", y: 3 },
                  { x: "Feb", y: 4 },
                  { x: "Mar", y: 3 },
                  { x: "Apr", y: 5 },
                  { x: "May", y: 2 }
                ]}
              />
              <VictoryLine
                style={{ data: { stroke: "#33CC66" } }}
                /* animate={{ duration: 500, onStart: { duration: 1000 } }} */
                data={[
                  { x: "Jan", y: 4 },
                  { x: "Feb", y: 6 },
                  { x: "Mar", y: 4 },
                  { x: "Apr", y: 2 },
                  { x: "May", y: 3 }
                ]}
              />
              <VictoryLine
                style={{ data: { stroke: "#66FF66" } }}
                /* animate={{ duration: 500, onStart: { duration: 1000 } }} */
                data={[
                  { x: "Jan", y: 2 },
                  { x: "Feb", y: 3 },
                  { x: "Mar", y: 2 },
                  { x: "Apr", y: 3 },
                  { x: "May", y: 5 }
                ]}
              />
              <VictoryLine
                style={{ data: { stroke: "black" } }}
                /* animate={{ duration: 500, onStart: { duration: 1000 } }} */
                data={[
                  { x: "Jan", y: 9 },
                  { x: "Feb", y: 13 },
                  { x: "Mar", y: 9 },
                  { x: "Apr", y: 10 },
                  { x: "May", y: 10 }
                ]}
              />
            </VictoryChart>
          )}
        </View>

        <View style={styles.throwThrashContainerGreen}>
          <Text
            style={{
              //color: "#6E6E6E",
              fontSize: 20,
              color: "white",
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              paddingBottom: 10,
              paddingLeft: 20,
              fontWeight: "bold"
            }}
          >
            Thrown trash in SRS - November
          </Text>

          <VictoryPie
            domainPadding={17}
            width={350}
            height={300}
            colorScale={["#009245", "#33CC66", "#66FF66"]}
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
  throwThrashContainer: {
    backgroundColor: "#fff",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.9,
    paddingTop: 20,
    //paddingBottom: 20,
    //padding: 20,
    borderRadius: 10
  },
  throwThrashContainerGreen: {
    backgroundColor: "#B8D2B9",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.9,
    paddingTop: 20,
    //paddingBottom: 20,
    //padding: 20,
    borderRadius: 10
  }
});
