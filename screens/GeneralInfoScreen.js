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
  VictoryTheme,
  VictoryLegend,
  VictoryAxis
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
              // color: "#6E6E6E",
              fontSize: 20,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
              paddingBottom: 10,
              paddingLeft: 20,
              fontWeight: "bold"
            }}
          >
            Thrown trash in SRS - 2019
          </Text>

          <Text
            style={{
              fontSize: 14,
              paddingBottom: 5,
              paddingLeft: 20,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
              // color: "#6E6E6E"
            }}
          >
            Total amount of plastic, paper and rest trash thrown i SRS.
          </Text>

          {Platform.OS === "android" ? (
            <VictoryChart domainPadding={17} width={350} height={300}>
              <VictoryAxis
                style={{ axisLabel: { padding: 32 } }}
                dependentAxis
                label="1000 kg"
              />
              <VictoryAxis />
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
            <VictoryChart
              style={{
                parent: {
                  paddingTop: 20
                }
              }}
              domainPadding={17}
              width={350}
              height={300}
            >
              <VictoryLegend
                x={25}
                y={0}
                //  title="Legend"
                centerTitle
                orientation="horizontal"
                gutter={20}
                style={{ title: { fontSize: 20 } }}
                data={[
                  { name: "Plastic", symbol: { fill: "#009245" } },
                  { name: "Paper", symbol: { fill: "#33CC66" } },
                  { name: "Rest", symbol: { fill: "#66FF66" } },
                  { name: "Total", symbol: { fill: "black" } }
                ]}
              />
              <VictoryAxis
                style={{ axisLabel: { padding: 32 } }}
                dependentAxis
                label="1000 kg"
              />
              <VictoryAxis />
              <VictoryLine
                style={{ data: { stroke: "#009245" } }}
                /*  animate={{ duration: 500, onStart: { duration: 1000 } }} */
                data={[
                  { x: "Jan", y: 1 },
                  { x: "Feb", y: 1.5 },
                  { x: "Mar", y: 1 },
                  { x: "Apr", y: 1 },
                  { x: "May", y: 3.5 },
                  { x: "Jun", y: 1 },
                  { x: "Jul", y: 2 },
                  { x: "Aug", y: 1 },
                  { x: "Sept", y: 1 }
                ]}
              />
              <VictoryLine
                style={{ data: { stroke: "#33CC66" } }}
                /* animate={{ duration: 500, onStart: { duration: 1000 } }} */
                data={[
                  { x: "Jan", y: 2.5 },
                  { x: "Feb", y: 3 },
                  { x: "Mar", y: 1.5 },
                  { x: "Apr", y: 2.5 },
                  { x: "May", y: 4 },
                  { x: "Jun", y: 2 },
                  { x: "Jul", y: 2 },
                  { x: "Aug", y: 1.5 },
                  { x: "Sept", y: 1.5 }
                ]}
              />
              <VictoryLine
                style={{ data: { stroke: "#66FF66" } }}
                /* animate={{ duration: 500, onStart: { duration: 1000 } }} */
                data={[
                  { x: "Jan", y: 17 },
                  { x: "Feb", y: 17 },
                  { x: "Mar", y: 17.5 },
                  { x: "Apr", y: 19 },
                  { x: "May", y: 18.5 },
                  { x: "Jun", y: 19 },
                  { x: "Jul", y: 15 },
                  { x: "Aug", y: 16.5 },
                  { x: "Sept", y: 17 }
                ]}
              />
              <VictoryLine
                style={{ data: { stroke: "black" } }}
                /* animate={{ duration: 500, onStart: { duration: 1000 } }} */
                data={[
                  { x: "Jan", y: 20.5 },
                  { x: "Feb", y: 21.5 },
                  { x: "Mar", y: 20 },
                  { x: "Apr", y: 22.5 },
                  { x: "May", y: 26 },
                  { x: "Jun", y: 22 },
                  { x: "Jul", y: 19 },
                  { x: "Aug", y: 19 },
                  { x: "Sept", y: 19.5 }
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
            Trash distribution in SRS - Dec 2019
          </Text>

          <VictoryPie
            domainPadding={17}
            width={350}
            height={300}
            colorScale={["#009245", "#33CC66", "#66FF66"]}
            data={[
              { x: "Plastic", y: 1 },
              { x: "Paper", y: 1.5 },
              { x: "Rest", y: 17 }
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
