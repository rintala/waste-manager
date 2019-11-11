import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import SignInScreen from "../screens/SignInScreen";
import GeneralInfoScreen from "../screens/GeneralInfoScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LearnMoreScreen from "../screens/LearnMoreScreen";
import AboutScreen from "../screens/AboutScreen";

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
        Platform.OS === "ios"
          ? `ios-person${focused ? "" : "-outline"}`
          : "md-person"
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
  tabBarLabel: "General Info",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
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
      name={Platform.OS === "ios" ? "ios-bulb" : "md-bulb"}
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

const tabNavigator = createBottomTabNavigator({
  SignInStack,
  GeneralInfoStack,
  LearnMoreStack,
  AboutStack
  //SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
