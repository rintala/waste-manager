import * as WebBrowser from "expo-web-browser";
import React from "react";
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

import { MonoText } from "../components/StyledText";

export default function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/images/waste-logo.png")}
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
              marginBottom: 20,
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
            underlineColorAndroid="transparent"
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
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("MyStat")}
            style={{
              backgroundColor: "#7A9A7E",
              borderRadius: 10,
              width: 300,
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", padding: 10 }}>Login</Text>
          </TouchableHighlight>
        </View>

        <View>
          <Text style={{ marginTop: 20, textAlign: "center", color: "white" }}>
            Forgot password?
          </Text>
        </View>
      </ScrollView>
    </View>
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
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
    marginTop: 15,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  helpLink: {
    paddingVertical: 15
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
