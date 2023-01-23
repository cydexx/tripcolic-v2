import { View, Text } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  ProfileScreen,
} from "../screens";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const [showOnBoard, setShowOnBoard] = useState(true);

  const handleOnBoardFinish = () => {
    setShowOnBoard(false);
  };
  return (
    <>
      {showOnBoard && <OnBoardingScreen handleDone={handleOnBoardFinish} />}

      {!showOnBoard && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ animation: "fade" }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AuthStack;
