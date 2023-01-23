import { useRef, useState } from "react";
import {
  Alert,
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//TAB ICONS
import avatar1 from "../assets/avatar1.png";
import home from "../assets/home.png";
import search from "../assets/search.png";
import notifications from "../assets/bell.png";
import settings from "../assets/settings.png";
import history from "../assets/history.png";

import logout from "../assets/logout.png";

//MENU ICONS
import menu from "../assets/menu.png";
// import user from "../assets/user.png";
import close from "../assets/close.png";
import photo from "../assets/photo.jpg";
import Footer from "../components/Footer";
import trip1 from "../assets/trip-1.jpg";
import trip2 from "../assets/trip-2.jpeg";
import trip3 from "../assets/trip-3.jpg";
import trip4 from "../assets/trip-4.jpg";
const HomeScreen = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-main-color items-start justify-start flex-1">
      <View className="p-4 mb-12">
        <TouchableOpacity>
          <Image className="rounded-3xl h-16 w-16 mt-2" source={avatar1} />
        </TouchableOpacity>
        <Text className="text-silver font-bold mt-3 text-lg ">Berke Diler</Text>
        <TouchableOpacity>
          <Text className="text-silver mt-1"> View Profile </Text>
        </TouchableOpacity>

        <View className="flex-grow mt-12">
          {/* Buttons */}
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Trip History", history)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>
        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>
      <Animated.View
        className="flex-grow py-4 px-5 bg-dark shadow-md shadow-dark  absolute top-0 bottom-0 right-0 left-0 transform     "
        style={{
          borderRadius: showMenu ? 20 : 0,
          transform: [
            {
              scale: scaleValue,
            },
            {
              translateX: offsetValue,
            },
          ],
        }}
      >
        <Animated.View
          style={{ transform: [{ translateY: closeButtonOffset }] }}
        >
          <View className="my-4 h-20 flex-row  items-center justify-between">
            <TouchableOpacity
              onPress={() => {
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.75,
                  duration: 400,
                  useNativeDriver: true,
                }).start();
                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : 175,
                  duration: 400,
                  useNativeDriver: true,
                }).start();
                Animated.timing(closeButtonOffset, {
                  toValue: !showMenu ? -30 : 0,
                  duration: 400,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
              }}
            >
              <Image
                className="w-5 h-5 "
                style={{ tintColor: "white" }}
                source={showMenu ? close : menu}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Image className="w-12 h-12 rounded-full" source={avatar1} />
            </TouchableOpacity>
          </View>

          <ScrollView
            className="gap-5 mb-20"
            showsVerticalScrollIndicator={false}
          >
            <Text className="text-3xl text-silver pt-5 font-bold mb-5">
              Some trip advices for you.
            </Text>
            <TouchableOpacity className="bg-main-color rounded-3xl ">
              <Image className="w-full h-80 rounded-3xl" source={trip1} />

              <Text className="text-xl font-bold pt-4 px-4 text-silver">
                Bolu Abant Tabiat Parkı
              </Text>

              <Text className="text-lg pt-1 px-4">
                hafta sonu için bire bir.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-main-color rounded-3xl ">
              <Image className="w-full h-80 rounded-3xl" source={trip2} />

              <Text className="text-xl font-bold pt-4 px-4 text-silver">
                Karaçayır Parkı
              </Text>

              <Text className="text-lg pt-1 px-4">
                ailecek piknik için ideal.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-main-color rounded-3xl ">
              <Image className="w-full h-80 rounded-3xl" source={trip3} />

              <Text className="text-xl font-bold pt-4 px-4 text-silver">
                Super art footage.
              </Text>

              <Text className="text-lg pt-1 px-4">
                extra super art footages blabla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-main-color rounded-3xl ">
              <Image className="w-full h-80 rounded-3xl" source={trip4} />

              <Text className="text-xl font-bold pt-4 px-4 text-silver">
                Super art footage.
              </Text>

              <Text className="text-lg pt-1 px-4">
                extra super art footages blabla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-main-color rounded-3xl ">
              <Image className="w-full h-80 rounded-3xl" source={photo} />

              <Text className="text-xl font-bold pt-4 px-4 text-silver">
                Super art footage.
              </Text>

              <Text className="text-lg pt-1 px-4">
                extra super art footages blabla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-main-color rounded-3xl ">
              <Image className="w-full h-80 rounded-3xl" source={photo} />

              <Text className="text-xl font-bold pt-4 px-4 text-silver">
                Super art footage.
              </Text>

              <Text className="text-lg pt-1 px-4">
                extra super art footages blabla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-main-color rounded-3xl ">
              <Image className="w-full h-80 rounded-3xl" source={photo} />

              <Text className="text-xl font-bold pt-4 px-4 text-silver">
                Super art footage.
              </Text>

              <Text className="text-lg pt-1 px-4">
                extra super art footages blabla
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </Animated.View>
      {/* <Footer /> !add this later*/}
    </SafeAreaView>
  );
};
const TabButton = (currentTab, setCurrentTab, title, image) => {
  const logout = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          //!to-do: logout function
          logout.navigate("Login");
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        className={`flex-row items-center py-2 pl-3 pr-5 mt-4 rounded-lg ${
          currentTab == title
            ? "bg-white shadow-md shadow-silver"
            : "bg-transparent"
        }`}
      >
        <Image
          className="w-6 h-6"
          style={{ tintColor: currentTab == title ? "#5359D1" : "white" }}
          source={image}
        />
        <Text
          className={`text-sm font-bold pl-3 ${
            currentTab == title ? "text-main-color" : "text-silver"
          }`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreen;
