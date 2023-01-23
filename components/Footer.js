import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import home from "../assets/home.png";
import search from "../assets/search.png";
import notifications from "../assets/bell.png";
import socialMedia from "../assets/social-media.png";
import add from "../assets/add.png";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-main-color opacity-90 w-96 h-20 m-4 items-center justify-around flex-row  rounded-3xl absolute bottom-0 left-0 right-0">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image className="w-7 h-7 " source={home} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image className="w-7 h-7 " source={search} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image className="w-9 h-9 bg-silver rounded-full" source={add} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image className="w-7 h-7 " source={socialMedia} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image className="w-7 h-7 " source={notifications} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
