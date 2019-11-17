import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import { ConfettiCannon } from 'react-native-confetti-cannon';
//import { Confetti } from "native-confetti";
import Confetti from 'react-dom-confetti';
import LottieView from 'lottie-react-native';

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
  [isLoggedOut, setIsLoggedOut] = useState(false);

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

  const MyStatContent = (

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
                fontWeight: 'bold',
                //color: "#6E6E6E"
              }}
            >
              My thrown trash - November
            </Text>

            
            <Text
              style={{
                fontSize: 14,
                paddingBottom: 15,
                paddingLeft: 20,
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
                  style={{marginTop: 5, width: 70, height: 70}}
                  source={require("../assets/images/recycled-plastic-2.png")}
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
                  style={{marginTop: 5, width: 60, height: 70}}
                  source={require("../assets/images/recycled-paper-2.png")}
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
                  style={{marginTop: 5, width: 80, height: 50, marginBottom: 10, marginTop: 10}}
                  source={require("../assets/images/recycled-rest-4.png")}
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


          <View style={styles.dateContainer}>
              
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableHighlight
                style={{
                  //backgroundColor: "white",
                  //backgroundColor: "#009245",
                  borderRadius: 10,
                  marginTop: 5,
                  //width: 90,
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "space-around",
                  marginBottom: 0
                }}
              >
                <Text style={{ color: "white", padding: 10 }}>Week</Text>
              </TouchableHighlight>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableHighlight
                style={{
                  backgroundColor: "white",
                  //backgroundColor: "#009245",
                  borderRadius: 10,
                  marginTop: 5,
                  width: 90,
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "space-around",
                  marginBottom: 0,
                }}
              >
                <Text style={{ color: "#A5C9A9", fontWeight: 'bold', padding: 10 }}>Month</Text>
              </TouchableHighlight>
              </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableHighlight
                style={{
                  //backgroundColor: "white",
                  //backgroundColor: "#009245",
                  borderRadius: 10,
                  marginTop: 5,
                  //width: 90,
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "space-around",
                  marginBottom: 0
                }}
              >
                <Text style={{ color: "white", padding: 10 }}>Year</Text>
              </TouchableHighlight>
            </View>

          </View>


          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableHighlight
              onPress={() => setIsLoggedOut(true)}
              style={{
                backgroundColor: "white",
                opacity: 0.9,
                //backgroundColor: "#009245",
                borderRadius: 10,
                marginTop: 20,
                width: 375,
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: 0
              }}
            >
              <Text style={{ color: "#A5C9A9", fontWeight: 'bold', padding: 10 }}>Log out</Text>
            </TouchableHighlight>
          </View>

          
        </ScrollView>
        
      </View>
    </ImageBackground>
  );

  return !isLoggedOut ? MyStatContent : <SignInScreen />;

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
  buttonsContainer: {
    backgroundColor: 'white',
    opacity: 0.9,
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
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  throwThrashContainer: {
    backgroundColor: "#A5C9A9",
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
    backgroundColor: '#A5C9A9',
    opacity: 0.9,
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
});
