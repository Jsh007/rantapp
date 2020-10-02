import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../../common/style/styles";
import {
  useFirebase,
  useFirestore,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { signUp } from "../authSlice";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
// Import styled components
import RantButton from "../../common/custom/buttons/Button";
import RantInput from "../../common/custom/forms/RantInput";
import { Label } from "../../common/custom/text/text";
import Container from "../../common/custom/containers/Container";
import {
  dWidth,
  dHeight,
  btnShadow,
  inputShadow,
  Logo,
} from "../../common/variables";

import Reactotron from "reactotron-react-native";

const SignUp = ({ navigation }) => {
  // const parent = navigation.dangerouslyGetParent();
  // Reactotron.display({
  //   name: "NAVIGATION DATA",
  //   preview: "SIGNUP PAGE NAV",
  //   value: navigation,
  // });
  const dispatch = useDispatch(); // use this to dispatch (on button press) the form data to signIn thunk action creator to sign the user in.
  const firebase = useFirebase();
  const firestore = useFirestore();
  const error = useSelector((state) => state.auth.authError);
  const currentUser = useSelector((state) => state.firebase.auth);

  const credentials = {
    email: "general-jsh-jj3@packsat.com",
    password: "12345678",
  };
  // We're just passing in a obj of data for now. We're gonna have a form that will submit/update a local state on here which would later be
  // passed to the dispatch function. Same goes for signin.
  const profile = {
    lastName: "Jovial",
    firstName: "Eigbe",
    gender: "M",
    dob: null,
    initials: "JE",
    aboutInfo: "A competent software developer",
    phoneNumber: "08131030440",
    profileImage: null,
    profileCover: null,
    city: "San francisco",
    state: "California",
    country: "USA",
    occupation: "Software Engineer",
    employer: "Packsat Ltd",
    profession: "Software Engineering",
    school: "Zanna Royal Academy",
    class: "2003",
    accountType: "admin", // should be a custom claim
    groupMembership: null,
    verified: true,
    stalkersCount: "5000",
    stalkingsCount: "100",
    accountStatus: true,
    modGroups: null,
    modStatus: true,
  };
  const fbref = {
    firebase,
    firestore,
  };

  // Form setup
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  // Submit handler
  function handleSubmit(cred, data, fb) {
    setTimeout(() => {
      dispatch(signUp(cred, data, fb));
    }, 500);
    // firebase.login(cred);
  }

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

              <RantInput
                placeholder="Enter First name"
                width={"100%"}
                height={"60px"}
                inputPaddingLeft={"16px"}
                backgroundColor={"#fff"}
                borderRadius={"4px"}
                textColor={"#3c3c3d"}
                fontSize={"16px"}
                style={inputShadow}
                onChangeText={(val) => setfirstName(val)}
              />
              <RantInput
                placeholder="Enter Last name"
                width={"100%"}
                height={"60px"}
                inputPaddingLeft={"16px"}
                backgroundColor={"#fff"}
                borderRadius={"4px"}
                textColor={"#3c3c3d"}
                fontSize={"16px"}
                style={inputShadow}
                password
                onChangeText={(val) => setlastName(val)}
              />
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
                password
                onChangeText={(val) => setEmail(val)}
              />
              <RantInput
                placeholder="Enter phone number"
                width={"100%"}
                height={"60px"}
                inputPaddingLeft={"16px"}
                backgroundColor={"#fff"}
                borderRadius={"4px"}
                textColor={"#3c3c3d"}
                fontSize={"16px"}
                style={inputShadow}
                password
                onChangeText={(val) => setPhone(val)}
              />
              <RantInput
                placeholder="Country"
                width={"100%"}
                height={"60px"}
                inputPaddingLeft={"16px"}
                backgroundColor={"#fff"}
                borderRadius={"4px"}
                textColor={"#3c3c3d"}
                fontSize={"16px"}
                style={inputShadow}
                password
                onChangeText={(val) => setCountry(val)}
              />
              {/* USER PASSWORD */}
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
                onChangeText={(val) => setPassword1(val)}
              />
              <RantInput
                placeholder="Re-Enter password"
                width={"100%"}
                height={"60px"}
                inputPaddingLeft={"16px"}
                backgroundColor={"#fff"}
                borderRadius={"4px"}
                textColor={"#3c3c3d"}
                fontSize={"16px"}
                style={inputShadow}
                password
                onChangeText={(val) => setPassword2(val)}
              />

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
                title="SignUp"
                onPress={() =>
                  handleSubmit(
                    {
                      firstName,
                      lastName,
                      email,
                      phone,
                      country,
                      password1,
                      password2,
                    },
                    fbref
                  )
                }
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
                buttonMarginTop={"30px"}
                buttonMarginBottom={"30px"}
              />
            </Container>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
