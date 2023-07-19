import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { BlurButton } from "../components";
import EStyleSheet from "react-native-extended-stylesheet";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../context/userSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const Feed = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <ImageBackground
      source={require("../assets/images/LoginBackground.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.logoutBtn}>
          <BlurButton
            onPress={() => {
              dispatch(logoutUser());
              navigation.navigate("Register");
            }}
            title="Logout"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Feed;

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 430 });

const styles = EStyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoutBtn: {
    width: "100%",
  },
});
