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
          ? `ios-md${focused ? "" : "-outline"}`
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
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LearnMoreStack.path = "";

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
  LearnMoreStack
  //SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
