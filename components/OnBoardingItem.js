import { View, Text, Dimensions, Image } from "react-native";
import React from "react";

const OnBoardingItem = ({ item }) => {
  let screenWidth = Dimensions.get("window").width;
  return (
    <View className="">
      <Image
        className=""
        source={item.image}
        style={{
          width: screenWidth,
          height: 500,
          resizeMode: "contain",
          flex: 0.7,
        }}
      />
      <View className="justify-center items-center" style={{ flex: 0.3 }}>
        <Text className="text-3xl font-semibold text-silver mb-3">
          {item.title}
        </Text>
        <Text className="text-xl font-semibold text-silver py-16">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
