import {
  View,
  Text,
  Pressable,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { NavigationButton } from "../components";

const Landing = () => {
  // fonts
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      source={require("../assets/images/LandingBackground.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Plan meetups with friends! 😉</Text>
        </View>
        <NavigationButton />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Landing;

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 480 });

const styles = EStyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  titleContainer: {
    rowGap: 11,
    marginTop: 108,
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: "40rem",
    fontFamily: "Inter_600SemiBold",
  },
  subtitle: {
    color: "#CFCFCF",
    fontSize: "32rem",
    fontFamily: "Inter_400Regular",
    width: "66%",
  },
});
