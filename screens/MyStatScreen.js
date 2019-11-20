import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import ConfettiCannon from "react-native-confetti-cannon";
import SignInScreen from "./SignInScreen";

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  Alert,
  TextInput,
  ImageBackground
} from "react-native";

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryTheme
} from "victory-native";

export default function MyStatScreen(props) {
  const [countPlastic, setPlastic] = useState(0);
  const [countPaper, setPaper] = useState(0);
  const [countRest, setRest] = useState(0);
  [isLoggedOut, setIsLoggedOut] = useState(false);
  [isAchieved, setIsAchieved] = useState(false);

  const data = [
    { type: "plastic", trashbags: countPlastic, fill: "#009245" },
    { type: "paper", trashbags: countPaper, fill: "#33CC66" },
    { type: "rest", trashbags: countRest, fill: "#66FF66" }
  ];

  clearCounts = () => {
    setPlastic(0);
    setPaper(0);
    setRest(0);
  };

  checkIfAchievementUnlocked = () => {
    let achievement = {};
    let isAchieved = false;
    if (countPlastic === 1 && countPaper === 1 && countRest === 1) {
      achievement = {
        level: 1,
        message: "Great job"
      };
      isAchieved = true;
    } else if (countPlastic === 2 && countPaper === 2 && countRest === 2) {
      achievement = {
        level: 2,
        message: "Amazing job"
      };
      isAchieved = true;
    }

    return [isAchieved, achievement];
  };

  incrementTrash = typeOfTrash => {
    if (typeOfTrash === "plastic") {
      setPlastic(prevCountPlastic => ++prevCountPlastic);
    } else if (typeOfTrash === "paper") {
      setPaper(prevCountPaper => ++prevCountPaper);
    } else if (typeOfTrash === "rest") {
      setRest(prevCountRest => ++prevCountRest);
    }
  };

  useEffect(() => {
    const [isAchievementUnlocked, achievement] = checkIfAchievementUnlocked();

    if (isAchievementUnlocked) {
      setIsAchieved(true);
      Alert.alert(
        "Level: " + "" + achievement.level,
        "Message: " + achievement.message,

        [
          {
            text: "OK",
            onPress: () => {
              setIsAchieved(false);
            }
          }
        ]
      );
      console.log("isAchived", isAchieved);
    }
  }, [countPlastic, countPaper, countRest]);

  const MyStatContent = (
    <ImageBackground
      source={require("../assets/images/background-green.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        {isAchieved && <ConfettiCannon count={50} origin={{ x: -10, y: 0 }} />}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
                paddingTop: 0,
                paddingLeft: 20,
                textDecorationLine: "underline"
              }}
            >
              Welcome User
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
                paddingLeft: 20,
                fontWeight: "bold"
                //color: "#6E6E6E"
              }}
            >
              My thrown trash - November
            </Text>

            <Text
              style={{
                fontSize: 14,
                // paddingBottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
                //color: "#6E6E6E"
              }}
            >
              To register thrown trash press the '+' for the correct trash type.
            </Text>

            {/* <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
                paddingBottom: 0
              }}
            >
              <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
                Plastic
              </Text>
              <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
                Paper
              </Text>
              <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
                Rest
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {countPlastic}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {countPaper}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {countRest}
              </Text>
            </View> */}

            <VictoryChart domainPadding={17} width={380} height={300} paddingRight={30}>
              <VictoryBar
                animate={{ duration: 500, onStart: { duration: 1000 } }}
                style={{
                  data: {
                    fill: ({ datum }) => datum.fill,
                    stroke: "black",
                    strokeWidth: 1
                  }
                }}
                data={data}
                x="type"
                y="trashbags"
              />
            </VictoryChart>
          

          <View style={styles.buttonsContainer}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={{ paddingBottom: 5 }}>
                <Image
                  style={{ marginTop: 5, width: 70, height: 70 }}
                  source={require("../assets/images/recycled-plastic-2.png")}
                />
              </View>

              <TouchableHighlight
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  // backgroundColor: "#B8D2B9",
                  backgroundColor: "#009245",
                  flex: 1,

                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => incrementTrash("plastic")}
              >
                <Text style={{ fontSize: 25 }}>+</Text>
              </TouchableHighlight>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={{ paddingBottom: 5 }}>
                <Image
                  style={{ marginTop: 5, width: 60, height: 70 }}
                  source={require("../assets/images/recycled-paper-2.png")}
                />
              </View>
              <TouchableHighlight
                style={{
                  height: 20,
                  width: 100,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  // backgroundColor: "#B8D2B9",
                  backgroundColor: "#33CC66",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => incrementTrash("paper")}
              >
                <Text style={{ fontSize: 25 }}>+</Text>
              </TouchableHighlight>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={{ paddingBottom: 5 }}>
                <Image
                  style={{
                    marginTop: 5,
                    width: 80,
                    height: 50,
                    marginBottom: 10,
                    marginTop: 15
                  }}
                  source={require("../assets/images/recycled-rest-4.png")}
                />
              </View>
              <TouchableHighlight
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  // backgroundColor: "#B8D2B9",
                  backgroundColor: "#66FF66",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => incrementTrash("rest")}
              >
                <Text style={{ fontSize: 25 }}>+</Text>
              </TouchableHighlight>
            </View>
          </View>
          </View>

          

          <View style={{backgroundColor: '#B8D2B9', marginLeft: 20, marginRight: 20, marginTop: 10, borderRadius: 10}}>
          <View>
          <Text style={{textAlign: 'left', marginLeft: 20, marginRight: 20, marginBottom: 10, marginTop: 10}}>
              Press on the different time buttons to change the time frame for your thrown trash.
            </Text>
          </View>

          <View style={styles.dateContainer}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableHighlight
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  backgroundColor: "white",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "black", textAlign: 'center' }}>
                  Week
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableHighlight
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  backgroundColor: '#33CC66',
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ color: "white", textAlign: 'center' }}
                >
                  Month
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableHighlight
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  backgroundColor: "white",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "black", textAlign: 'center' }}>
                  Year
                </Text>
              </TouchableHighlight>
            </View>
          </View>

          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableHighlight
              onPress={() => {
                clearCounts();
                setIsLoggedOut(true);
              }}
              style={{
                // backgroundColor: "#B8D2B9",
                // borderWidth: 0.5,
                opacity: 1,
                backgroundColor: "#33CC66",
                borderRadius: 10,
                marginTop: 10,
                width: 375,
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: 0,
                marginTop: 80
              }}
            >
              <Text
                style={{ color: "white", padding: 10 }}
              >
                Sign out
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );

  return isLoggedOut ? <SignInScreen /> : MyStatContent;
}

SignInScreen.navigationOptions = {
  header: null
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    //backgroundColor: "#B8D2B9"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  buttonsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  throwThrashContainer: {
    //backgroundColor: "#B8D2B9",
    backgroundColor: "white",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.9,
    paddingTop: 20,
    //paddingBottom: 20,
    //padding: 20,
    borderRadius: 10
  },
  dateContainer: {
    // backgroundColor: "white",
    // backgroundColor: "#B8D2B9",
    opacity: 0.9,
    //marginTop: 15,
    marginLeft: 10,
    marginRight: 5,
    paddingBottom: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    // alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10
  }
});
