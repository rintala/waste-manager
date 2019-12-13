import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { Platform } from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import SignInScreen from "../screens/SignInScreen";
import GeneralInfoScreen from "../screens/GeneralInfoScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LearnMoreScreen from "../screens/LearnMoreScreen";
import AboutScreen from "../screens/AboutScreen";
import MyStatScreen from "../screens/MyStatScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const SignInStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  config
);

SignInStack.navigationOptions = {
  tabBarLabel: "My stats",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios" ? `ios-person${focused ? "" : ""}` : "md-person"
      }
    />
  )
};

SignInStack.path = "";

const GeneralInfoStack = createStackNavigator(
  {
    GeneralInfo: GeneralInfoScreen
  },
  config
);

GeneralInfoStack.navigationOptions = {
  tabBarLabel: "Neighbours",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-people` : "md-people"}
    />
  )
};

GeneralInfoStack.path = "";

const LearnMoreStack = createStackNavigator(
  {
    LearnMore: LearnMoreScreen
  },
  config
);

LearnMoreStack.navigationOptions = {
  tabBarLabel: "Learn More",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-bulb" : "md-bulb"}
    />
  )
};

LearnMoreStack.path = "";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  config
);

AboutStack.navigationOptions = {
  tabBarLabel: "About",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? "ios-information-circle-outline"
          : "md-information-circle-outline"
      }
    />
  )
};

AboutStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={""} />
};

SettingsStack.path = "";

const MyStatStack = createStackNavigator(
  {
    MyStat: MyStatScreen
  },
  config
);

MyStatStack.navigationOptions = {
  tabBarLabel: "My Stat",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={""} />
};

MyStatStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    SignInStack,
    GeneralInfoStack,
    LearnMoreStack,
    AboutStack
    /* MyStatStack */
    //SettingsStack}
  },
  {
    tabBarOptions: {
      activeTintColor: "#009245",
      labelStyle: {
        fontSize: 14
      },
      style: {
        backgroundColor: "white"
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
