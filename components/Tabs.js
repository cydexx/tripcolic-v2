import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import SocialMediaScreen from "../screens/SocialMediaScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

import home from "../assets/home.png";
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#11111",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SocialMedia"
        component={SocialMediaScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
