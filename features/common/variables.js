import React from "react";
import { Platform, StatusBar, Image, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Chip, IconButton, Colors } from "react-native-paper";
import { useNavigation, useNavigationState } from "@react-navigation/native";
// Global variables, include; firebase and firestore instance
// General App padding top: import into any file that needs it and where you'll use safeareaview
import Reactotron from "reactotron-react-native";
export const paddingTop =
  Platform.OS === "android" ? StatusBar.currentHeight : 0;
export const dWidth = wp;
export const dHeight = hp;

// shadows
export const btnShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 5,
};
export const inputShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.8,
  shadowRadius: 5,
  elevation: 5,
};

export const Logo = () => (
  <Image
    width={"100px"}
    height={"100px"}
    source={require("../../assets/images/Rantapp-txt.png")}
    style={{ marginBottom: 10 }}
  />
);
export const LogoS = () => (
  <Image
    width={"100px"}
    height={"100px"}
    source={require("../../assets/images/Rantapp-Slogo.png")}
    style={{ marginBottom: 0 }}
  />
);

export const topTabsOptions = {
  labelStyle: { fontSize: 13, fontWeight: "bold", textAlign: "center" },
  activeTintColor: "#fff",
  inactiveTintColor: "#3c3c3d",
  tabStyle: {
    // width: 100,
    paddingVertical: 0,
  },
  indicatorStyle: {
    backgroundColor: "#F17122",
    marginRight: 2,
    marginLeft: 2,
    borderRadius: 8,
    height: 60,
  },
  style: {
    height: 60,
  },
};
export function NavBurger({ navigation }) {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <IconButton icon="menu" color="#F17122" size={35} onPress={openDrawer} />
  );
}
