import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import axios from 'axios';
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
  TextInput
} from "react-native";

import MyStatScreen from "./MyStatScreen";

import { MonoText } from "../components/StyledText";

export default function SignInScreen(props) {
  [isLoggedIn, setIsLoggedIn] = useState(false);
  [tagNrInput, settagNrInput] = useState('');
  [PasswordInput, setPasswordInput] = useState('');
  [userDataPlastic, setuserDataPlastic] = useState(0);
  [userDataPaper, setuserDataPaper] = useState(0);
  [userDataRest, setuserDataRest] = useState(0);

  const serverURL = 'http://localhost:5000/';
  // const serverURL = 'http://78.73.29.132:5000/';
  
  const http = axios.create({
    baseURL: serverURL,
  });

  onLogin = () => {
    console.log(tagNrInput);
    console.log(PasswordInput);

    if (!isLoggedIn){
      //Do a call to the server
      http.post('/login', {
        username: tagNrInput,
        password: PasswordInput
      })
      .then(response => { 

        //console.log(response.data.plastic)
        //console.log(response.data.paper)
        //console.log(response.data.rest)
        setuserDataPlastic(response.data.plastic)
        setuserDataPaper(response.data.paper)
        setuserDataRest(response.data.rest)
        setIsLoggedIn(true)
      })
      .catch(error => {
          // console.log(error)
          Alert.alert(
            "Failed to login"
          );
          
      });
      // console.log(isLoggedIn);
    }

  }

  const SignInContent = (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.incrementButtonImage}
          />
        </View>

        <View>
          <Text
            style={{
              marginTop: 50,
              textAlign: "center",
              color: "white",
              fontSize: 35,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
            }}
          >
            {"WASTE MANAGER"}
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            borderBottomColor: "white",
            borderBottomWidth: 1,
            width: 300,
            marginLeft: 60
          }}
        />

        <View style={styles.getStartedContainer}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              marginTop: 20,
              marginBottom: 80,
              fontSize: 20,
              fontFamily:
                Platform.OS === "android" ? "Roboto" : "Helvetica Neue"
            }}
          >
            STOCKHOLM ROYAL SEAPORT
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            marginLeft: 60,
            marginBottom: 10,
            justifyContent: "center",
            paddingLeft: 10,
            alignItems: "flex-start",
            backgroundColor: "white",
            width: 300,
            height: 30,
            borderRadius: 10
          }}
        >
          <TextInput
            placeholder="Tag number"
            keyboardType="number-pad"
            width={300}
            underlineColorAndroid="transparent"
            onChangeText={(text) => settagNrInput(text)}
          />
        </View>

        <View
          style={{
            marginLeft: 60,
            marginBottom: 20,
            justifyContent: "center",
            paddingLeft: 10,
            alignItems: "flex-start",
            backgroundColor: "white",
            width: 300,
            height: 30,
            borderRadius: 10
          }}
        >
          <TextInput
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            width={300}
            underlineColorAndroid="transparent"
            onChangeText={(text) => setPasswordInput(text)}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableHighlight
            onPress={() => onLogin()}
            style={{
              //backgroundColor: "#7A9A7E",
              backgroundColor: "#009245",
              //backgroundColor: "#009966",
              //backgroundColor: "#009933",
              //backgroundColor: "#339933",
              borderRadius: 10,
              width: 300,
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: 0
            }}
          >
            <Text style={{ color: "white", padding: 10 }}>Login</Text>
          </TouchableHighlight>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ marginTop: 20, textAlign: "center", color: "white" }}>
            Forgot password?
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  return !isLoggedIn ? SignInContent : <MyStatScreen plastic={userDataPlastic} paper={userDataPaper} rest={userDataRest} user={tagNrInput}/>;
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
    flex: 1,
    backgroundColor: "#B8D2B9"
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
  welcomeContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  incrementButtonImage: {
    marginTop: 50,
    width: 150,
    height: 150
  }
});
