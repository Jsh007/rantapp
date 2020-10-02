import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Button,
} from "react-native";
import { styles } from "../../common/style/styles";
import {
  useFirebase,
  useFirestore,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { signIn as login } from "../authSlice";
import LottieView from "lottie-react-native";
// import AuthLoaded from "../../navigation/Navigation";
// import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
// Import styled components
import RantButton from "../../common/custom/buttons/Button";
import RantInput from "../../common/custom/forms/RantInput";
import { Label } from "../../common/custom/text/text";
// import SafeAreaView from "../../common/custom/containers/SafeAreaView";
import Container from "../../common/custom/containers/Container";
import {
  dWidth,
  dHeight,
  btnShadow,
  inputShadow,
  Logo,
} from "../../common/variables";
import Reactotron from "reactotron-react-native";
// Use; if auth.loading === pending - display loading lottie animation
const SignIn = ({ navigation }) => {
  // Reactotron.log(fbref);
  // FB instances
  const firebase = useFirebase();
  const firestore = useFirestore();
  const fbref = {
    firebase,
    firestore,
  };
  // Dispatch instance
  const dispatch = useDispatch(); // use this to dispatch (on button press) the form data to signIn thunk action creator to sign the user in.
  // Auth slices from redux state
  const auth = useSelector((state) => state.firebase.auth);
  const error = useSelector((state) => state.auth.authError); // USE the loaded and empty checks to display lottie loading.. and authslice's authError to show errors

  //Demo data
  const credentials = {
    email,
    password,
  };
  const credentials1 = {
    email: "general-jsh@packsat.com",
    password: "123456",
  };
  const credentials2 = {
    email: "general-jsh-jj2@packsat.com",
    password: "12345678",
  };

  // Submit handler
  function handleSubmit(cred, fb) {
    setTimeout(() => {
      dispatch(login(cred, fb));
    }, 500);
    // firebase.login(cred);
  }
  // Form setup
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
            <Container width={dWidth("90%")}>
              <Logo />
              {/* <Text style={styles.title}>Sign In</Text> */}
              <RantInput
                placeholder="Enter email address"
                width={"100%"}
                height={"60px"}
                inputPaddingLeft={"16px"}
                backgroundColor={"#fff"}
                borderRadius={"4px"}
                textColor={"#3c3c3d"}
                fontSize={"16px"}
                style={inputShadow}
                onChangeText={(val) => setEmail(val)}
              />
              <RantInput
                placeholder="Enter password"
                width={"100%"}
                height={"60px"}
                inputPaddingLeft={"16px"}
                backgroundColor={"#fff"}
                borderRadius={"4px"}
                textColor={"#3c3c3d"}
                fontSize={"16px"}
                style={inputShadow}
                password
                onChangeText={(val) => setPassword(val)}
              />
              <Label
                size={"15px"}
                color={"#3c3c3d"}
                textCase={"capitalize"}
                weight={"bold"}
                itemAlign={"right"}
                width={"100%"}
              >
                Forgot password ?
              </Label>
              {error && ( // Wrap it in a tochableOpacity and give it an onPress handler which should navigate to the forget password form screen
                <Label
                  color={"red"}
                  textCase={"capitalize"}
                  weight={"bold"}
                  labelTopPadding={"10px"}
                >
                  {error}
                </Label>
              )}
              <RantButton
                title="Login"
                onPress={() => handleSubmit({ email, password }, fbref)}
                backgroundColor={"#303030"}
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
                buttonMarginTop={"50px"}
                buttonMarginBottom={"100px"}
              />

              {/* <Text>
                Entered: {email} and {password}
              </Text> */}
              <Label
                size={"20px"}
                color={"#000000"}
                textCase={"capitalize"}
                weight={"normal"}
                labelTopPadding={"10px"}
              >
                Don't have an account ?
              </Label>
              <RantButton
                title="Sign Up"
                onPress={() => navigation.navigate("SignUp")}
                backgroundColor={"#F17122"}
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
                buttonMarginTop={"20px"}
                buttonMarginBottom={"0px"}
              />
            </Container>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
/** If react-redux-firestore won't implement a hook to connect to firebase auth, make this a class component and use the connect HOC to sync
 * The firebase auth data to redux state
 * Also implement custom claims
 */
// Ui component containing signIn form. Signs the user in using firebase auth, updates the auth state in the firebase
// reducer in the redux state and naviagte to the default Tab nav.
// Import and dispatch the authSlice's signIn async action here, passing it the local form state.
// Then select and print the error messages from the auth slice of redux state using useSelector

// WE'RE NOW FULLY UTILIZING REACTREDUXFIREBASE. SIGNIN COMPONENT WILL NOW DISPATCH SIGNIN THUNK TO FIREBASE AND IF SUCESSFULL, FIREBASE
// WILL UPDATE THE FIREBASE REDUCER STATE IN THE REDUX STORE WITH A UID AND SET ISEMPTY TO FALSE. THIS WILL KICK THE NAVIGATION TO
// APPDRAWER
