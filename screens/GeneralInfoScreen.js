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
  { quarter: 1, earnings: 13000, fill: '#009245' },
  { quarter: 2, earnings: 16500, fill: '#33CC66' },
  { quarter: 3, earnings: 14250, fill: '#66FF66' }
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

        <View style={styles.throwThrashContainer}>
            <Text
              style={{
                //color: "#6E6E6E",
                fontSize: 20,
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
                paddingBottom: 10,
                fontWeight: 'bold'
              }}
            >
              Thrown trash in SRS - November
            </Text>

            
            <Text
              style={{
                fontSize: 14,
                paddingBottom: 15,
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
                //color: "#6E6E6E"
              }}
            >
              TEXT
            </Text>

            <View 
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
                paddingBottom: 5
                }}>
              <Text style={{fontSize: 20, textDecorationLine: 'underline'}} >Plastic</Text>
              <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>Paper</Text>
              <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>Rest</Text>
            </View>

            <VictoryChart domainPadding={17} width={350} height={300}>
              <VictoryBar animate={{duration: 500, onStart: {duration: 1000}}} style={{data: {fill: ({ datum }) => datum.fill, stroke: 'black', strokeWidth: 1 }}} data={data} x="quarter" y="earnings" />
            </VictoryChart>
          </View>


        <View style={styles.throwThrashContainer}>
        <Text
              style={{
                //color: "#6E6E6E",
                fontSize: 20,
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
                paddingBottom: 10,
                fontWeight: 'bold'
              }}
            >
              Thrown trash in SRS - November
            </Text>

          
            <VictoryPie domainPadding={17} width={350} height={300} 
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
  },
  throwThrashContainer: {
    backgroundColor: "#fff",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.9,
    //paddingTop: 20,
    //paddingBottom: 20,
    padding: 20,
    borderRadius: 10
  }
});
