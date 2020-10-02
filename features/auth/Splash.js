import React from "react";
import { View, Text } from "react-native";
import { styles } from "../common/style/styles";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default Splash;

// App's splash/loading screen, use lotie animation here.
