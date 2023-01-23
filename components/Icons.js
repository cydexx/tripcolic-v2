import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const Icons = () => {
  return (
    <View>
      <Text>Icons</Text>
    </View>
  );
};
export const BackIcon = () => {
  return (
    <TouchableOpacity>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
      </svg>
    </TouchableOpacity>
  );
};

export const MailIcon = () => {
  return (
    <View>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
      </svg>
    </View>
  );
};

export default Icons;
