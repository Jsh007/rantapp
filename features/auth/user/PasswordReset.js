import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const passwordReset = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORGOT PASSWORD SCREEN</Text>
    </View>
  );
};

export default passwordReset;

// Connects to the firebase auth and fecthes the user doc/object with the given email and then sends a reset
// instructions to the email.
// learn more on google password rest for firebase
