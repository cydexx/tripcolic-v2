import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
  FlatList,
  Image,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const data = [
  {
    title: "Quick and Easy Trips",
    description: "lorem ipsum dolor falan filan",
    image: require("../../assets/photo.jpg"),
  },
  {
    title: "Quick and Easy Trips 2",
    description: "lorem ipsum dolor falan filan",
    image: require("../../assets/photo.jpg"),
  },
  {
    title: "Quick and Easy Trips 3 ",
    description: "lorem ipsum dolor falan filan",
    image: require("../../assets/photo.jpg"),
  },
];

const OnBoardingScreen = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View className=" flex-1 items-center justify-center bg-silver">
        <Image className="w-96 h-96 my-14" source={item.image} />
        <View>
          <Text className="text-2xl text-center my-12 font-bold text-main-color">
            {item.title}
          </Text>
          <Text className=" text-lg text-center my-12 mt-2 font-semibold text-secondary-color">
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View className="w-10 h-10  mr-5 justify-center items-center text-center">
        <Text className="text-main-color font-semibold text-lg">Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View className="w-10 h-10  mr-5 justify-center items-center text-center">
        <Text className="text-main-color font-semibold text-lg">Done</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View className="w-10 h-10  ml-5 justify-center items-center text-center">
        <Text className="text-main-color font-semibold text-lg">Prev</Text>
      </View>
    );
  };
  const handleDone = () => {
    props.handleDone();
  };
  return (
    <View className="flex-1">
      <AppIntroSlider
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={{ backgroundColor: "#8EA7E9" }}
        activeDotStyle={{ backgroundColor: "#5359D1" }}
        onDone={handleDone}
      />
    </View>
  );
};
export default OnBoardingScreen;
