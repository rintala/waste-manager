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
  VictoryTheme,
  VictoryAxis
} from "victory-native";
import { isFor } from "@babel/types";

export default function MyStatScreen(props) {
  const [countPlastic, setPlastic] = useState(0.4);
  const [countPaper, setPaper] = useState(0.3);
  const [countRest, setRest] = useState(0.9);
  const [ratio, setRatio] = useState(null);

  [isLoggedOut, setIsLoggedOut] = useState(false);
  [isAchieved, setIsAchieved] = useState(false);
  [level, setLevel] = useState("bronze");

  const statuses = [
    { status: "ok", color: "#33CC66" },
    { status: "disturbed", color: "yellow" },
    { status: "down", color: "red" }
  ];
  const [status, setStatus] = useState(statuses[0].status);

  const bagWeights = {
    plastic: 0.5,
    paper: 0.6,
    rest: 0.9
  };

  const data = [
    { type: "plastic", trashbags: countPlastic, fill: "#009245" },
    { type: "paper", trashbags: countPaper, fill: "#33CC66" },
    { type: "rest", trashbags: countRest, fill: "#66FF66" }
  ];

  const intialAchievements = {
    firstAchievement: {
      level: 1,
      message: "Amazing job",
      isAchieved: false,
      showDetails: false,
      details: "Just getting started",
      background: "#66FF66"
    },
    secondAchievement: {
      level: 2,
      message: "Wow, amazing job",
      isAchieved: false,
      showDetails: false,
      details: "On your way!",
      background: "#33CC66"
    },
    thirdAchievement: {
      level: 3,
      message: "I'm impressed!",
      isAchieved: false,
      showDetails: false,
      details: "Aiming high!",
      background: "#33CC66"
    },
    fourthAchievement: {
      level: 4,
      message: "Lets go champ!",
      isAchieved: false,
      showDetails: false,
      details: "On the top!",
      background: "#33CC66"
    }
  };

  const [achievements, setAchievements] = useState(intialAchievements);

  clearCounts = () => {
    setPlastic(0);
    setPaper(0);
    setRest(0);
  };

  checkIfAchievementUnlocked = () => {
    let achievement = {};
    let isAchieved = false;
    console.log(
      "check if achivement is unlocked",
      countPlastic,
      countPaper,
      countRest
    );
    if (countPlastic > 0 && countPaper > 0 && countRest > 0) {
      achievement = achievements.firstAchievement;

      if (achievement.isAchieved === false) {
        achievement.isAchieved = true;
        setAchievements(prevAchievements => ({
          ...prevAchievements,
          firstAchievement: achievement
        }));
        isAchieved = true;
      } else {
        isAchieved = false;
      }
    }

    if (countPlastic > 1 && countPaper > 1 && countRest > 1) {
      achievement = achievements.secondAchievement;

      if (achievement.isAchieved === false) {
        achievement.isAchieved = true;
        setAchievements(prevAchievements => ({
          ...prevAchievements,
          secondAchievement: achievement
        }));
        isAchieved = true;
      } else {
        isAchieved = false;
      }
    }

    if (countPlastic > 4 && countPaper > 4 && countRest > 4) {
      achievement = achievements.thirdAchievement;
      if (achievement.isAchieved === false) {
        achievement.isAchieved = true;
        setAchievements(prevAchievements => ({
          ...prevAchievements,
          thirdAchievement: achievement
        }));
        isAchieved = true;
      } else {
        isAchieved = false;
      }
    }

    if (countPlastic > 6 && countPaper > 6 && countRest > 6) {
      achievement = achievements.fourthAchievement;

      if (achievement.isAchieved === false) {
        achievement.isAchieved = true;
        if (achievement.isAchieved === false) {
          achievement.isAchieved = true;
          setAchievements(prevAchievements => ({
            ...prevAchievements,
            fourthAchievement: achievement
          }));
          isAchieved = true;
        } else {
          isAchieved = false;
        }
      }
    }

    return [isAchieved, achievement];
  };

  incrementTrash = typeOfTrash => {
    if (typeOfTrash === "plastic") {
      setPlastic(prevCountPlastic => (prevCountPlastic += bagWeights.plastic));
    } else if (typeOfTrash === "paper") {
      setPaper(prevCountPaper => (prevCountPaper += bagWeights.paper));
    } else if (typeOfTrash === "rest") {
      setRest(prevCountRest => (prevCountRest += bagWeights.rest));
    }

    setRatio(this.computeRatio());
  };

  computeRatio = () => {
    let newRatio =
      (countPlastic + countPaper) / (countRest + countPlastic + countPaper);
    console.log("newRatio", newRatio);

    return newRatio;
  };

  reportUpdatedStatus = newStatus => {
    console.log("send feedback to backend - status:", newStatus);
    console.log("determine if problem actually has occurred ");
    console.log("based on backend evaluation - request support");
  };

  updateStatus = newStatus => {
    reportUpdatedStatus(newStatus);
    setStatus(newStatus);
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

  useEffect(() => {
    if (ratio > 0 && ratio <= 0.15) {
      setLevel("bronze");
    } else if (ratio > 0.15 && ratio <= 0.3) {
      setLevel("silver");
    } else if (ratio > 0.3 && ratio <= 0.45) {
      setLevel("gold");
    } else if (ratio > 0.45) {
      setLevel("platinum");
    }
  }, [ratio]);

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

          <View
            style={{
              backgroundColor:
                status === "ok"
                  ? "#009245"
                  : status === "disturbed"
                  ? "yellow"
                  : "red",
              opacity: 0.9,
              // paddingTop: 20,
              borderRadius: 10,
              padding: 20,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20
              // marginBottom: 5
            }}
          >
            <View style={styles.statusContainer}>
              <Text
                style={{
                  color: status === "disturbed" ? "black" : "white",
                  fontSize: "24px"
                }}
              >
                Station status
              </Text>

              {/*  <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/images/recycled-bin.png")}
              /> */}
              <Text
                style={{
                  color: status === "disturbed" ? "black" : "white",
                  fontSize: "24px"
                }}
              >
                : {status}
              </Text>
            </View>
            <View style={styles.statusContainer}>
              {statuses.map(statusObject => (
                <View style={styles.buttonContainer}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <TouchableHighlight
                      style={{
                        borderRadius: 10,
                        borderWidth: 0.5,

                        // backgroundColor: "#B8D2B9",
                        backgroundColor: statusObject.color,
                        flex: 1,
                        padding: 15,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      onPress={() => updateStatus(statusObject.status)}
                    >
                      <Text
                        style={{
                          fontSize: 15
                        }}
                      >
                        {statusObject.status}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              ))}
            </View>
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
              My thrown trash - December
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
            <VictoryChart
              domainPadding={17}
              width={380}
              height={300}
              paddingRight={30}
            >
              <VictoryAxis
                style={{ axisLabel: { padding: 35 } }}
                dependentAxis
                label="kg"
              />
              <VictoryAxis />
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

          <View
            style={{
              backgroundColor: "#B8D2B9",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              borderRadius: 10
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "left",
                  marginLeft: 20,
                  marginRight: 20,
                  marginBottom: 10,
                  marginTop: 10
                }}
              >
                Press on the different time buttons to change the time frame for
                your thrown trash.
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
                  <Text style={{ color: "black", textAlign: "center" }}>
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
                    backgroundColor: "#33CC66",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
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
                  <Text style={{ color: "black", textAlign: "center" }}>
                    Year
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
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
              My thrown trash distribution
            </Text>
            <View>
              <VictoryPie
                domainPadding={17}
                width={350}
                height={300}
                colorScale={["#009245", "#33CC66", "#66FF66"]}
                data={[
                  { x: "Plastic", y: countPlastic },
                  { x: "Paper", y: countPaper },
                  { x: "Rest", y: countRest }
                ]}
              />
            </View>
          </View>

          <View style={styles.throwThrashContainerGreen}>
            <View>
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
                My level
              </Text>
            </View>
            <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    borderWidth: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:
                      level === "bronze"
                        ? "#A77044"
                        : level === "silver"
                        ? "#A7A7AD"
                        : level === "gold"
                        ? "#D6AF36"
                        : level === "platinum"
                        ? "#cbc7c5"
                        : "green"
                  }}
                >
                  <Text>{level} </Text>
                </View>
              </View>
            </View>
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
              My badges
            </Text>
            <View style={styles.statusContainer}>
              {Object.keys(achievements).map(
                achievementKey =>
                  achievements[achievementKey].isAchieved && (
                    <View style={styles.buttonContainer}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <TouchableHighlight
                          style={{
                            borderRadius: 10,
                            borderWidth: 0.5,

                            // backgroundColor: "#B8D2B9",
                            backgroundColor: achievements[achievementKey]
                              .background
                              ? achievements[achievementKey].background
                              : "grey",
                            flex: 1,
                            padding: 15,
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                          onPress={() => {
                            setAchievements(prevAchievements => ({
                              ...prevAchievements,
                              [achievementKey]: {
                                ...prevAchievements[achievementKey],
                                showDetails: !prevAchievements[achievementKey]
                                  .showDetails
                              }
                            }));
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: "bold"
                              }}
                            >
                              {achievements[achievementKey].message}
                            </Text>
                            {achievements[achievementKey].showDetails && (
                              <View
                                style={{
                                  marginTop: 10,
                                  backgroundColor: "white",
                                  color: "black",
                                  borderRadius: 5,
                                  opacity: 0.9,
                                  padding: 15
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: 15
                                  }}
                                >
                                  {achievements[achievementKey].details}
                                </Text>
                              </View>
                            )}
                          </View>
                        </TouchableHighlight>
                      </View>
                    </View>
                  )
              )}
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
                marginTop: 30
              }}
            >
              <Text style={{ color: "white", padding: 10 }}>Sign out</Text>
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
    padding: 10,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  buttonContainer: {
    padding: 5,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },

  statusContainer: {
    //backgroundColor: "#B8D2B9",
    marginTop: 10,
    color: "white",
    flex: 1,
    flexDirection: "row"
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
    borderRadius: 10,
    marginTop: 10
  },
  throwThrashContainerGreen: {
    backgroundColor: "#B8D2B9",
    // backgroundColor: "white",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.9,
    paddingTop: 20,
    //paddingBottom: 20,
    //padding: 20,
    borderRadius: 10,
    marginTop: 10
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
