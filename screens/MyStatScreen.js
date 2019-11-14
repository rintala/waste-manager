import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
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

export default function SignInScreen(props) {
  const [countPlastic, setPlastic] = useState(0);
  const [countPaper, setPaper] = useState(0);
  const [countRest, setRest] = useState(0);

  const data = [
    { type: "plastic", trashbags: countPlastic, fill: '#009245' },
    { type: "paper", trashbags: countPaper, fill: '#33CC66' },
    { type: "rest", trashbags: countRest, fill: '#66FF66' }
  ];

  checkIfAchievementUnlocked = () => {
    let achievement = {};
    let isAchieved = false;

    if (countPlastic === 1 && countPaper === 1 && countRest === 1) {
      achievement = {
        level: 1,
        message: "Great job"
      };
      isAchieved = true;
    }

    return [isAchieved, achievement];
  };

  incrementTrash = typeOfTrash => {
    if (typeOfTrash === "plastic") {
      setPlastic(
        prevCountPlastic => ++prevCountPlastic,
        console.log("sho", countPlastic)
      );
    } else if (typeOfTrash === "paper") {
      setPaper(prevCountPaper => ++prevCountPaper);
    } else if (typeOfTrash === "rest") {
      setRest(prevCountRest => ++prevCountRest);
    }
  };

  useEffect(() => {
    const [isAchievementUnlocked, achievement] = checkIfAchievementUnlocked();

    if (isAchievementUnlocked) {
      Alert.alert(
        "Level: " + "" + achievement.level,
        "Message: " + achievement.message
      );
    }
  }),
    [countPlastic, countPaper, countRest];

  return (
    <ImageBackground
      source={require("../assets/images/background-green.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
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
              {"Welcome User"}
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
              My thrown trash - November
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
              To register thrown trash press the '+' for the correct trash type.
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

            <View 
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                fontFamily:
                  Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
                }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{countPlastic}</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{countPaper}</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{countRest}</Text>
            </View>

            <VictoryChart domainPadding={17} width={350} height={300}>
              <VictoryBar animate={{duration: 500, onStart: {duration: 1000}}} style={{data: {fill: ({ datum }) => datum.fill, stroke: 'black', strokeWidth: 1 }}} data={data} x="type" y="trashbags" />
            </VictoryChart>
          </View>



          <View style={styles.buttonsContainer}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{paddingBottom: 5}}>
                <Image
                  style={styles.incrementButtonImage}
                  source={require("../assets/images/recycled-plastic-bag.png")}
                />
              </View>

              <TouchableHighlight
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 10,
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

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{paddingBottom: 5}}>
                <Image
                  style={styles.incrementButtonImage}
                  source={require("../assets/images/recycled-paper.png")}
                />
              </View>
              <TouchableHighlight
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 10,
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

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{paddingBottom: 5}}>
                <Image
                  style={styles.incrementButtonImage}
                  source={require("../assets/images/recycled-bin.png")}
                />
              </View>
              <TouchableHighlight
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 10,
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
          
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

SignInScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

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

  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  homeTitle: {
    fontSize: 27,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    paddingVertical: 30
  },
  homeSubTitle: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    paddingVertical: 10,
    fontStyle: "italic"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  buttonsContainer: {
    backgroundColor: '#A5C9A9',
    opacity: 0.82,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  incrementButtonImage: {
    marginTop: 5,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer: {
    justifyContent: "center",
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
