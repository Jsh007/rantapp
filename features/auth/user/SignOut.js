import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Button,
} from "react-native";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector, useDispatch, connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../common/style/styles";
// Import styled components
import RantButton from "../../common/custom/buttons/Button";
import Container from "../../common/custom/containers/Container";
import {
  dWidth,
  dHeight,
  btnShadow,
  inputShadow,
} from "../../common/variables";
import Reactotron from "reactotron-react-native";
const signOut = ({ navigation }) => {
  const firebase = useFirebase();
  const Logout = () => {
    setTimeout(() => {
      firebase.logout();
    }, 1000);
  };
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#9C51B6" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#5946B2" }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <LinearGradient
            colors={["#FAFAFA", "#ECECEC"]}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container width={dWidth("100%")}>
              <Text style={styles.title}>Signout from your account</Text>
              <RantButton
                title="LogOut"
                onPress={Logout}
                backgroundColor={"#000"}
                width={dWidth("60%")}
                height={"60px"}
                borderRadius={"60px"}
                textColor={"#fff"}
                fontWeight={"bold"}
                fontSize={"18px"}
                textCase={"uppercase"}
                customStyle={btnShadow}
                buttonPaddingTop={"16px"}
                buttonPaddingBottom={"16px"}
                buttonMarginTop={"16px"}
                buttonMarginBottom={"16px"}
              />
            </Container>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default signOut;
