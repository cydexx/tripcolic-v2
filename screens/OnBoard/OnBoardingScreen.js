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
  StyleSheet,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const slides = [
  {
    id: "111",
    title: "Quick and Easy Trips",
    description: "lorem ipsum dolor falan filan",
    image: require("../../assets/photo.jpg"),
  },
  {
    id: "112",
    title: "Quick and Easy Trips 2",
    description: "lorem ipsum dolor falan filan",
    image: require("../../assets/photo.jpg"),
  },
  {
    id: "113",
    title: "Quick and Easy Trips 3 ",
    description: "lorem ipsum dolor falan filan",
    image: require("../../assets/photo.jpg"),
  },
];

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const OnBoardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // const skip = () => {
  //   const lastSlideIndex = slides.length - 1;
  //   const offset = lastSlideIndex * width;
  //   ref?.current.scrollToOffset({ offset });
  //   setCurrentSlideIndex(lastSlideIndex);
  // };
  // const Footer = () => {
  //   return (
  //     <View
  //       style={{
  //         height: screenHeight * 0.25,
  //         justifyContent: "space-between",
  //         paddingHorizontal: 20,
  //       }}
  //     >
  //       <View className="flex-row justify-center mt-5">
  //         {slides.map((_, index) => (
  //           <View
  //             key={index}
  //             style={[
  //               {
  //                 height: 2.5,
  //                 width: 10,
  //                 backgroundColor: "#333",
  //                 marginHorizontal: 3,
  //                 borderRadius: 2,
  //               },
  //               currentSlideIndex == index && {
  //                 backgroundColor: "white",
  //                 width: 25,
  //               },
  //             ]}
  //           />
  //         ))}
  //       </View>
  //       <View className="mb-6">
  //         <View className="flex-row gap-4">
  //           <TouchableOpacity className="flex-1 h-12 rounded-md bg-silver justify-center items-center">
  //             <Text>SKIP</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity className="flex-1 h-12 rounded-md bg-silver justify-center items-center">
  //             <Text>NEXT</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <View className="flex-1 justify-center items-center bg-main-color">
      {/* flatlist ile yapılcak aşşağıda kod örenği var fixleyip ekle. */}
      <ScrollView
        className="flex-row"
        horizontal
        bounces={false}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      >
        <View
          className="flex-1 justify-center items-center  bg-main-color"
          style={{ width: screenWidth }}
        >
          <Text className="text-5xl font-semibold">TUTORIAL 1</Text>
          <View className="flex-row absolute bottom-10 ">
            <SkipButton text="skip" />
            <SkipButton text="next" />
          </View>
        </View>
        <View
          className="flex-1 justify-center items-center bg-bubble-gum"
          style={{ width: screenWidth }}
        >
          <Text className="text-5xl font-semibold">TUTORIAL 2</Text>
          <View className="flex-row absolute bottom-10 ">
            <SkipButton text="skip" />
            <SkipButton text="next" />
          </View>
        </View>
        <View
          className="flex-1 justify-center items-center bg-bermuda"
          style={{ width: screenWidth }}
        >
          <Text className="text-5xl font-semibold">TUTORIAL 3</Text>
          <View className="flex-row absolute bottom-10 ">
            <SkipButton text="skip" />
            <SkipButton text="next" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const SkipButton = ({ text }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className=" bg-dark rounded-2xl mx-6 px-6 py-3"
      onPress={() => navigation.navigate("Login")}
    >
      <Text className=" text-2xl text-silver font-semibold">{text}</Text>
    </TouchableOpacity>
  );
};
export default OnBoardingScreen;

{
  /* <Animated.FlatList
        data={slides}
        keyExtractor={(item) => item.key}
        bounces={false}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{
          paddingBottom: 100,
          height: screenHeight * 0.75,
        }}
        renderItem={({ item }) => {
          return <Slide item={item} />;
        }}
      />
      <Footer /> */
}

// ---------
//       <View
//         style={{
//           height: screenHeight * 0.25,
//           justifyContent: "space-between",
//           paddingHorizontal: 20,
//         }}
//       >
//         <View className="flex-row justify-center mt-5">
//           {slides.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 {
//                   height: 2.5,
//                   width: 10,
//                   backgroundColor: "#333",
//                   marginHorizontal: 3,
//                   borderRadius: 2,
//                 },
//                 currentSlideIndex == index && {
//                   backgroundColor: "white",
//                   width: 25,
//                 },
//               ]}
//             />
//           ))}
//         </View>
//         <View className="mb-6">
//           <View className="flex-row gap-4">
//             <TouchableOpacity className="flex-1 h-12 rounded-md bg-silver justify-center items-center">
//               <Text>SKIP</Text>
//             </TouchableOpacity>
//             <TouchableOpacity className="flex-1 h-12 rounded-md bg-silver justify-center items-center">
//               <Text>NEXT</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

{
  /* <ScrollView
        className="flex-row"
        horizontal
        bounces={false}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      >
        <View
          className="flex-1 justify-center items-center  bg-main-color"
          style={{ width: screenWidth }}
        >
          <Text className="text-5xl font-semibold">TUTORIAL 1</Text>
          <SkipButton />
        </View>
        <View
          className="flex-1 justify-center items-center bg-bubble-gum"
          style={{ width: screenWidth }}
        >
          <Text className="text-5xl font-semibold">TUTORIAL 2</Text>
          <SkipButton />
        </View>
        <View
          className="flex-1 justify-center items-center bg-bermuda"
          style={{ width: screenWidth }}
        >
          <Text className="text-5xl font-semibold">TUTORIAL 3</Text>
          <SkipButton />
        </View>
      </ScrollView> */
}
{
  /* <FlatList
          data={slides}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        /> */
}

// const Indicator = ({ scrollX }) => {
//   return (
//     <View className="absolute bottom-24 flex-row">
//       {slides.map((_, i) => {
//         return (
//           <View
//             key={`indicator-{i}`}
//             style={{
//               height: 10,
//               width: 10,
//               borderRadius: 5,
//               backgroundColor: "#111",
//               margin: 10,
//             }}
//           />
//         );
//       })}
//     </View>
//   );
// };
// const BackDrop = ({ scrollX }) => {
//   const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
//   const backgroundColor = scrollX.interpolate({
//     inputRange: bgs.map((_, i) => i * screenWidth),
//     outputRange: bgs.map((bg) => bg),
//   });
//   return (
//     <Animated.View className="absolute bottom-24 flex-row">
//       {slides.map((_, i) => {
//         return (
//           <View
//             key={`indicator-${i}`}
//             style={[
//               StyleSheet.absoluteFillObject,
//               {
//                 backgroundColor,
//               },
//             ]}
//           />
//         );
//       })}
//     </Animated.View>
//   );
// };
