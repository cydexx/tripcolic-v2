import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MailIcon } from "../../components/Icons";
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-main-color">
      <Text className="font-semibold text-4xl text-silver pb-14">
        Register Screen
      </Text>

      <View className="flex-row border-b-2 border-bubble-gum pb-2 rounded-xl mb-7">
        <TextInput
          className="bg-secondary-color w-1/2 rounded-xl p-2"
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View className="flex-row border-b-2 border-bubble-gum pb-2 rounded-xl mb-4">
        <TextInput
          className="bg-secondary-color w-1/2 rounded-xl p-2"
          placeholder="Password"
          keyboardType="default"
        />
      </View>
      <TouchableOpacity
        className=" bg-dark rounded-2xl mx-6 px-6 py-3"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className=" text-2xl text-silver font-semibold">Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
