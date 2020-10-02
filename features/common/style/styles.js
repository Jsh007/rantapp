import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styled from "styled-components";

// Temporary style - I'll eventually use styled components. So this folder will contain built, custom styled views, buttons, text and more.
export const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginBottom: 16,
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
  },
  loadingText: {
    fontSize: 12,
  },
  text: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
  },
  loader: {
    height: hp("50%"),
    width: wp("50%"),
  },
});
