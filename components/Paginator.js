import { View, Text } from "react-native";
import React from "react";

const Paginator = ({ data }) => {
  return (
    <View className="flex-row h-16">
      {data.map((_, i) => {
        return (
          <View
            style={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#11111",
              marginHorizontal: 8,
              width: 10,
            }}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
